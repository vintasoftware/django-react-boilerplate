import sys

from django.apps import apps
from django.conf import settings
from django.core.management.base import BaseCommand
from django.db import connections
from django.db.migrations.autodetector import MigrationAutodetector
from django.db.migrations.executor import MigrationExecutor
from django.db.migrations.state import ProjectState
from django.db.utils import OperationalError


class Command(BaseCommand):
    """
    Detect if any apps have missing migration files
    (not necessaily applied though)
    Based on: https://gist.github.com/nealtodd/a8f87b0d95e73eb482c5
    """

    help = "Detect if any apps have missing migration files"

    def add_arguments(self, parser):
        parser.add_argument(
            "--ignore",
            action="store",
            nargs="+",
            dest="ignore",
            default=[],
            help="Comma separated list of apps to ignore missing migration files. "
            "Useful for specifying third-party ones here.",
        )

    def handle(self, *args, **options):
        changed = set()

        self.stdout.write("Checking...")
        for db in settings.DATABASES.keys():
            try:
                executor = MigrationExecutor(connections[db])
            except OperationalError:
                sys.exit("Unable to check migrations: cannot connect to database\n")

            autodetector = MigrationAutodetector(
                executor.loader.project_state(), ProjectState.from_apps(apps),
            )
            changed.update(autodetector.changes(graph=executor.loader.graph).keys())

        changed -= set(options["ignore"])

        if changed:
            sys.exit(
                "Apps with model changes but no corresponding migration file: %(changed)s\n"
                % {"changed": list(changed)}
            )
        else:
            sys.stdout.write("All migration files present\n")
