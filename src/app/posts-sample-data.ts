export const POST_SAMPLE_DATA = [
  {
    title: 'Mocking APIs with json-server: A Step-by-Step Guide',
    slug: 'mocking-apis-with-json-server-a-step-by-step-guide',
    meta_description:
      'Learn how to easily mock APIs using json-server. Follow this step-by-step guide to create a mock API for seamless development and testing.',
    content:
      '## Introduction\r\n\r\nDuring the development of web applications, working with APIs is a common task. However, sometimes APIs might not be fully developed or available, which can hinder the development process. To overcome this challenge, developers often resort to mocking APIs to simulate their behavior. One popular tool for achieving this is `json-server`. In this article, we\'ll walk you through the process of mocking an API using `json-server` and provide an example of how to create a mock API with custom data.\r\n\r\n## Getting Started\r\n\r\n1. **Installation**: First, ensure you have Node.js installed on your machine. If not, download and install it from the official Node.js website. Once Node.js is installed, open your terminal and install `json-server` globally using npm:\r\n\r\n```\r\nnpm install -g json-server\r\n```\r\n\r\n2. **Create a JSON File**: Start by creating a JSON file to hold your mock data. You can use any text editor or IDE to create this file. For example, let\'s create a file named `db.json` with the following content:\r\n\r\n```json\r\n{\r\n "products": [\r\n   {\r\n     "id": 1,\r\n     "name": "Mock Product 1",\r\n     "price": 19.99\r\n   },\r\n   {\r\n     "id": 2,\r\n     "name": "Mock Product 2",\r\n     "price": 29.99\r\n   }\r\n ]\r\n}\r\n```\r\n\r\n   Save this file in your project directory.\r\n\r\n3. **Start the Mock Server**: Open your terminal, navigate to the directory containing `db.json`, and start the mock server by running:\r\n\r\n```\r\njson-server --watch db.json\r\n```\r\n\r\n   The mock server will start at `http://localhost:3000`.\r\n\r\n4. **Accessing the Mock API**: You can now access your mock API by sending HTTP requests to the appropriate endpoints. In our case, the data will be available at `http://localhost:3000/products`.\r\n\r\n## Customizing the Mock API\r\n\r\nThe example above showcased a simple mock API for products. You can customize the data and structure of the API according to your application\'s needs. Add more endpoints, nested data, or different types of data to match your requirements.\r\n\r\n## Conclusion\r\n\r\n`json-server` is a valuable tool for developers to create mock APIs that simulate real API behavior. It allows you to continue developing frontend components without waiting for backend APIs to be fully implemented. By following the steps outlined in this article, you can quickly set up a mock API for testing and development purposes. This approach enhances productivity and ensures a smooth development process, even when working with incomplete or unavailable APIs. Happy mocking!',
    date: '2023-08-23',
    tags: [
      {
        name: 'ChatGPT',
      },
      {
        name: 'API',
      },
    ],
  },
  {
    title:
      'My TypeScript Journey: From Python Enthusiast to Embracing New Horizons',
    slug: 'My-TypeScript-Journey',
    meta_description:
      'Embark on my transition from Python to TypeScript. I created a repository with a initial setup for typescript proving some basic tools.',
    content:
      "As a programmer, there's nothing quite like the thrill of embarking on a new learning adventure. For years, I've been immersed in the world of Python, mastering its intricacies and building exciting projects. But recently, I felt the itch to explore something different, to expand my skill set and dive into the realm of TypeScript. To document my journey and help others who might be on a similar path, I created the repository [tsdemo](https://github.com/abel-castro/tsdemo). \r\n\r\n\r\nTransitioning from Python to TypeScript might seem like a leap, but every journey starts with a spark of curiosity. For me, it was the allure of static typing, the promise of more structured frontend development, and the opportunity to explore modern JavaScript tooling. If you've ever wondered what drives someone to step out of their programming comfort zone, you might find some familiar sentiments here.\r\n\r\nProgramming is not just about writing code; it's about creating maintainable and readable code. In the repository tsdemo I introduce tools like auto-formatting with [prettier](https://prettier.io)  and code linting with [ESLint](https://eslint.org), which play a pivotal role in maintaining code quality and consistency. I share how I integrated these tools into my TypeScript workflow, helping me stay focused on learning and problem-solving rather than wrestling with code styling.\r\n\r\nMy journey from Python to TypeScript has been an exhilarating one. Through the repository [tsdemo](https://github.com/abel-castro/tsdemo), I've captured my experiences, insights, and code samples as I navigate the uncharted waters of a new programming language. Whether you're a fellow Python enthusiast looking to branch out or a newcomer eager to explore TypeScript, I hope my repository serves as a source of inspiration and practical guidance.",
    date: '2023-08-08',
    tags: [
      {
        name: 'TypeScript',
      },
      {
        name: 'ChatGPT',
      },
    ],
  },
  {
    title: 'The Django n+1 issue and solutions for it',
    slug: 'django-n-plus-1-issue-and-solutions-for-it',
    meta_description:
      'Discover the n+1 issue in Django and learn how to solve it for improved performance. Get tips and solutions for using select_related and prefetch_related.',
    content:
      "Django is a popular and powerful web framework for Python that has become the go-to choice for many web developers. However, one common performance problem that can occur when using Django is the \"n+1\" issue. This problem can arise when querying a large amount of data, leading to increased loading times and decreased performance. In this blog post, we'll explore what the n+1 issue is, why it occurs, and how to solve it.\r\n\r\n## What is the n+1 issue in Django?\r\n\r\nThe n+1 issue occurs when querying a large amount of data from a database. Consider the following example: you have a model that represents a blog post, and you want to retrieve a list of all blog posts along with the author of each post. To do this, you might run the following code:\r\n\r\n```python\r\nposts = BlogPost.objects.all()\r\nfor post in posts:\r\n    author = post.author\r\n```\r\n\r\nWhile this code will retrieve all the information you need, it can be slow and inefficient when dealing with large amounts of data. The reason for this is that it will execute a separate SQL query for each post to retrieve the author information. This can lead to an excessive number of SQL queries and slow down your application.\r\n\r\n## Why does the n+1 issue occur in Django?\r\n\r\nThe n+1 issue occurs because Django does not retrieve all the data for a relationship in a single query. Instead, it retrieves data for each relationship as it is needed. In the example above, this means that Django will execute a separate SQL query for each post to retrieve the author information. This can lead to a large number of SQL queries and slow down your application.\r\n\r\n## How to solve the n+1 issue in Django?\r\n\r\nThere are several ways to solve the n+1 issue in Django, and the best solution depends on your specific use case. Here are some common solutions:\r\n\r\n1) Use the `select_related` method\r\n\r\nThe `select_related` method is a convenient way to retrieve related data in a single query. You can use it to retrieve the author information for all posts in a single query like this:\r\n\r\n```python\r\nposts = BlogPost.objects.all().select_related('author')\r\n\r\nfor post in posts:\r\nauthor = post.author\r\n```\r\n\r\n\r\n2) Use the `prefetch_related ` method\r\n\r\nThe `prefetch_related ` method is similar to `select_related`, but it is more flexible and can be used for more complex relationships. You can use it to retrieve the author information for all posts in a single query like this:\r\n\r\n```python\r\nposts = BlogPost.objects.all().prefetch_related('author')\r\n\r\nfor post in posts:\r\nauthor = post.author\r\n```\r\n\r\n## Conclusion\r\n\r\nThe n+1 issue is a common performance problem that can occur when using Django. By understanding what the n+1 issue is, why it occurs, and how to solve it, you can ensure that your Django applications run smoothly and efficiently.\r\n\r\n\r\n\r\n## Did you liked this article? \r\n\r\nThis content was generated by ChatGPT at 9th February 2023 with the following questions:\r\n- Write a blog post about django n+1 issues and solutions for it\r\n- Generate a markdown file with that content\r\n- Write a meta description for this post \r\n\r\nThe original post had a solution number 3 that looked like this:\r\n\r\nUse the in operator: The in operator can be used to retrieve multiple records in a single query. You can use it to retrieve the author information for all posts in a single query like this:\r\n\r\n```python\r\nposts = BlogPost.objects.all()\r\nauthor_ids = [post.author_id for post in posts]\r\nauthors = Author.objects.filter(id__in=author_ids)\r\n```\r\n\r\nI told ChatGPT that this is not a solution for the issue and it answered this:\r\n\r\n\r\n\r\n> \"Thank you for pointing that out. You're correct, using the in operator as I described in Solution 3 is not a direct solution for the n+1 issue. It is more of a workaround that can be used to reduce the number of SQL queries, but it doesn't address the root cause of the problem.\"",
    date: '2023-02-09',
    tags: [
      {
        name: 'Django',
      },
      {
        name: 'ChatGPT',
      },
    ],
  },
  {
    title:
      'Django ORM - call queryset update() in json field when the key to update is not present',
    slug: 'call-queryset-update-in-json-field-key-not-present',
    meta_description:
      'This post describes using the Django ORM how to call update in json field when the key to update is not present.',
    content:
      'I learnt today that this is not possible with the Django ORM to call update in a queryset json field when the key that you want to update is not present. For example:\r\n\r\n```python\r\nqueryset.update(json_data__key="something")\r\n```\r\n\r\nThis will return `FieldDoesNotExist: ModelClass has no field named \'json_data__key\'`  because some objects does not have the key “key”.\r\n\r\nI found in [this stackoverflow post](https://stackoverflow.com/a/45308014) a great solution for this. \r\n\r\n```python\r\nfrom django.db.models.expressions import Func\r\n\r\nclass JsonSetValue(Func):\r\n    function = "jsonb_set"\r\n    template = "%(function)s(%(expressions)s, \'{\\"%(keyname)s\\"}\',\'\\"%(new_value)s\\"\', %(create_missing)s)"\r\n    arity = 1\r\n\r\n    def __init__(\r\n        self,\r\n        expression: str,\r\n        keyname: str,\r\n        new_value: str,\r\n        create_missing: bool = False,\r\n        **extra,\r\n    ):\r\n        super().__init__(\r\n            expression,\r\n            keyname=keyname,\r\n            new_value=new_value,\r\n            create_missing="true" if create_missing else "false",\r\n            **extra,\r\n        )\r\n```\r\n\r\nWith help of `JsonSetValue` you will be able to do the following:\r\n\r\n```python\r\nqueryset.update(\r\n    json_data=JsonSetValue(\r\n        "json_data",\r\n        keyname="key",\r\n        new_value="something",\r\n        create_missing=True,\r\n    )\r\n)\r\n```',
    date: '2022-05-31',
    tags: [
      {
        name: 'Postgres',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'Sync model fields using Postgres triggers',
    slug: 'sync-model-fields-using-postgres-triggers',
    meta_description:
      'How to create Postgres triggers for syncing model fields between two different models.',
    content:
      '**The goal:** \r\n\r\nSync some model fields between two different models.\r\n\r\nExample scenario:\r\n\r\n```\r\nclass PlayerData(models.Model):\r\n\tgoals = models.IntegerField()\r\n\tassists = models.IntegerField()\r\n\ttackles = models.IntegerField()\r\n\t# 10 fields more with player data \r\n\r\n\r\nclass PlayerMostRelevantData(models.Model):\r\n\tplayer_data_id = models.ForeignKey(PlayerData, on_delete=models.CASCADE)\r\n\tgoals = models.IntegerField()\r\n\tassists = models.IntegerField()\r\n```\r\n\r\nWe want to keep the data of `PlayerData` and `PlayerMostRelevantData` on sync by every create, update and object deletion. \r\n\r\n**Possible solutions:**\r\n\r\nOf course for this task we could use [django signals](https://docs.djangoproject.com/en/4.0/topics/signals/) but a more reliable solution would be to make the data synchronisation at database level using [Postgres triggers](https://www.postgresql.org/docs/9.1/sql-createtrigger.html).\r\n\r\nFollowing SQL-Snippet explain what we want to achieve. If you run the statements you will see that inserting a new row in the table called "original" will create a new row with the same content in the table "original_copy".\r\n\r\n```\r\ndrop table if exists original;\r\ncreate table original(id int, name text);\r\ndrop table if exists original_copy;\r\ncreate table original_copy(original_id int PRIMARY KEY, name text);\r\n\r\n\r\ncreate or replace function trigger_on_example()\r\nreturns trigger language plpgsql as $$\r\nbegin\r\n    insert into original_copy (original_id, name)\r\n    values(new.id, new.name)\r\n    ON CONFLICT (original_id)\r\n    DO\r\n        UPDATE SET name = new.name;\r\n\treturn new;\r\nend\r\n$$;\r\n\r\ncreate trigger trigger_on_example\r\nbefore insert or update on original\r\nfor each row execute procedure trigger_on_example();\r\n\r\ninsert into original (id, name)\r\nvalues (1, \'John\');\r\n\r\nselect *\r\nfrom original;\r\n\r\nselect *\r\nfrom original_copy;\r\n```\r\n\r\n\r\n**The solution**\r\n\r\nFor our example with the `PlayerData` and `PlayerMostRelevantData` we can write a django migration like this that creates the Postgres triggers for us in the database.\r\n\r\n```python\r\n\r\nfrom django.db import connection, migrations\r\n\r\n\r\ndef create_triggers(apps, schema_editor):\r\n    with connection.cursor() as cursor:\r\n        # player data create or update trigger\r\n        cursor.execute(\r\n            """\r\n            create or replace function trigger_on_player_data_create_or_update()\r\n            returns trigger language plpgsql as $$\r\n            begin\r\n               insert into players_playerdata(player_data_id, goals, assists, tackles)\r\n               values(new.id, new.goals, new.assists, new.tackles)\r\n               ON CONFLICT (player_data_id)\r\n               DO\r\n                   UPDATE SET player_data_id = new.id, goals = new.goals,\r\n                   assists = new.assists;\r\n               return new;\r\n            end\r\n            $$;\r\n            create trigger trigger_on_player_data_create_or_update\r\n            before insert or update on players_playerdata\r\n            for each row execute procedure trigger_on_player_data_create_or_update();\r\n            """\r\n        )\r\n\r\n        # player data delete trigger\r\n        cursor.execute(\r\n            """\r\n            create or replace function trigger_on_player_data_delete()\r\n            returns trigger language plpgsql as $$\r\n            begin\r\n               delete from players_playermostrelevantdata where player_data_id=old.id;\r\n               return NULL;\r\n            end\r\n            $$;\r\n            create trigger trigger_on_player_data_delete\r\n            before delete on players_playerdata\r\n            for each row execute procedure trigger_on_player_data_delete();\r\n            """\r\n        )\r\n\r\n\r\nclass Migration(migrations.Migration):\r\n\r\n    dependencies = [\r\n        ("players", "0001_initial"),\r\n    ]\r\n\r\n    operations = [migrations.RunPython(create_triggers, reverse_code=migrations.RunPython.noop)]\r\n\r\n\r\n```\r\n\r\n\r\n\r\nSources and inspiration:\r\n\r\n- https://www.postgresqltutorial.com/postgresql-upsert/\r\n- https://stackoverflow.com/a/40901037\r\n- https://objectpartners.com/2019/01/24/creating-raw-sql-migrations-in-django/',
    date: '2022-03-22',
    tags: [
      {
        name: 'Postgres',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'My self made and hosted google analytics alternative',
    slug: 'my-self-made-hosted-google-analytics-alternative',
    meta_description:
      'In this post I describe my self made and hosted Google Analytics alternative that uses Django and Chart.js.',
    content:
      "![Basic analytics](https://i.imgur.com/3NqGi9A.png \"Basic analytics\")\r\n\r\nI didn't wanted to use Google Analytics or similar tools to track the traffic of my side projects because: a) I don't need that much details about my views and b) I don't want to have a cookie consent dialog for asking for permission to forward user related data to a 3rd party service.\r\n\r\nBecause of that I use a self made and hosted service for tracking basic web traffic analytics stuff: [basic_analytics](https://github.com/abel-castro/basic_analytics).\r\n\r\nIt is made with [Django](https://www.djangoproject.com), [Bootstrap](https://getbootstrap.com) and [chart.js](https://www.chartjs.org) and provides an API endpoint where you can send the page view data as payload.\r\n\r\nWith that data it can generate different charts that show:\r\n- Monthly average page views\r\n- Page views by urls\r\n- Browser, country, device and operative system distribution of the views\r\n- Filter all this data by real user views or include robots views\r\n\r\n**Update February 2022**\r\n\r\nIn order to send data to Basic Analytics from the backend I created a Django app called [django_basic_analytics_tracker](https://github.com/abel-castro/django_basic_analytics_tracker).\r\nIt provides a mixin that you can use in the views that you want to track. It overrides the `dispatch` method, take some request data and sends it to basic analytics service in the post payload.",
    date: '2021-12-20',
    tags: [
      {
        name: 'Django',
      },
      {
        name: 'Chart.js',
      },
    ],
  },
  {
    title: 'My initial macOS setup - tools and resources list',
    slug: 'my-initial-macos-setup-tools-and-resources',
    meta_description:
      'This is a collection of commands and resources that were useful for me with the initial setup of my MacBook.',
    content:
      "This is a collection of commands and resources that were useful for me with the initial setup of my MacBook. \r\n\r\n\r\n- Installs Xcode Command Line Tools \r\n```\r\nxcode-select --install\r\n```\r\n- [Generate SSH key and add it to the ssh agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)\r\n- Homebrew [https://brew.sh/](https://brew.sh/)\r\n- Oh my zsh [https://ohmyz.sh/](https://ohmyz.sh/)\r\n- nvm [https://github.com/nvm-sh/nvm#git-install](https://github.com/nvm-sh/nvm#git-install)\r\n- Install Docker Desktop [https://docs.docker.com/desktop/mac/install/](https://docs.docker.com/desktop/mac/install/)\r\n- Rectangle: Move and resize windows in macOS using keyboard shortcuts or snap areas [https://rectangleapp.com/](https://rectangleapp.com/)\r\n- Add some shell aliases. I can't work without these:\r\n```\r\nalias g='git'\r\nalias gc='git checkout'\r\nalias gco='git commit'\r\nalias gs='git status'\r\nalias gp='git pull'\r\n\r\nalias dc='docker-compose'\r\nalias up='docker-compose up'\r\nalias down='docker-compose down'\r\n```",
    date: '2021-10-07',
    tags: [
      {
        name: 'macOS',
      },
      {
        name: 'Docker',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'Django and htmx',
    slug: 'django-and-htmx',
    meta_description:
      'I created a repository with some implementations with Django of the code examples from the htmx docs page.',
    content:
      'With [htmx](https://htmx.org) is possible to build dynamic Webapps without REST-APIs and JavaScript. Just simple Django views that returns html.\r\n\r\nYou can learn more about it in this interesting [Django chat podcast episode](https://djangochat.com/episodes/htmx-carson-gross) with the htmx creator Carson Gross.\r\n\r\nI really like the idea and I wanted since a while to try htmx working together with Django and finally, I managed to work on that. I created [this repository](https://github.com/abel-castro/django-htmx-demo) with some implementations with Django of the code [examples from the htmx docs page](https://htmx.org/examples/).\r\n\r\n**Update: **also this website has some htmx magic on it. For example the post pagination or the search function are built with htmx.',
    date: '2021-08-27',
    tags: [
      {
        name: 'Htmx',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'Using variables in the Dockerfile FROM statement',
    slug: 'using-variables-in-the-Dockerfile-from-statement',
    meta_description:
      'This article demonstrates how to use a variable as image in the Dockerfile FROM statement',
    content:
      'This demonstrates how to use a variable as image for the Dockerfile FROM statement. \r\n \r\nGiven this docker-compose.yml / Dockerfile setup:\r\n\r\n**docker-compose.yml**\r\n\r\n```yml\r\nversion: \'3\'\r\nservices:\r\n\tpostgres:\r\n\t    build:\r\n\t      context: .\r\n\t      dockerfile: ./compose/postgres/Dockerfile\r\n\t    volumes:\r\n\t\t\t\t- postgres_data:/var/lib/postgresql/data\r\n\t    env_file:\r\n\t      - .env\r\nvolumes:\r\n    postgres_data:\r\n```\r\n\r\n\r\n**Dockerfile**\r\n\r\n```yml\r\nFROM postgres:12.3\r\n```\r\n\r\nThe Postgres service will always use the same FROM image defined in the Dockerfile.\r\nIf we want instead to set the FROM image using a variable, we can do the following:\r\n\r\n\r\n**Docker-compose.yml**\r\n- pass a build_image arg with a default value\r\n\r\n```yml\r\nversion: \'3\'\r\nservices:\r\n\tpostgres:\r\n\t    build:\r\n\t      context: .\r\n\t      dockerfile: ./compose/postgres/Dockerfile\r\n\t      args:\r\n\t       build_image: "${BUILD_IMAGE:-postgres:12.3}" \r\n\t    volumes:\r\n\t\t\t\t- postgres_data:/var/lib/postgresql/data\r\n\t    env_file:\r\n\t      - .env\r\nvolumes:\r\n    postgres_data:\r\n```\r\n\r\n\r\n**Dockerfile**\r\n- use the passed build_image arg in the FROM statement\r\n\r\n```yml\r\n# this will be the default image\r\nARG build_image="postgres:12.3"\r\n\r\n# The default image will be overriden if other build image is passed as ARG\r\nARG build_image=$build_image\r\nFROM $build_image\r\n```\r\n\r\n**.env**\r\n-  Pass the desired value in .env\r\n\r\n```\r\nBUILD_IMAGE=postgis:9.6\r\n```',
    date: '2021-06-01',
    tags: [
      {
        name: 'Docker',
      },
    ],
  },
  {
    title: 'Create and use "dummy" Models in a Test Case in Django',
    slug: 'create-dummy-models-in-a-test-case-in-django',
    meta_description:
      'Example of how to create a "dummy" Model and use it in a test case in Django.',
    content:
      "Let's image we need a new model only for a test case and we don't really want to register in our project.  We can create something similar than this:\r\n\r\n**example_app.tests.test_app.models.TestModel**\r\n\r\n```python\r\nfrom django.db import models\r\n\r\n\r\nclass TestModel(models.Model):\r\n    field_a = models.IntegerField()\r\n    field_b = models.IntegerField()\r\n\r\n    class Meta:\r\n        app_label = 'test_app'\r\n```\r\n\r\nWe could try to use `TestModel` and create objects in a test case:\r\n**test_models.py**\r\n\r\n```python\r\nfrom django.test import TestCase\r\n\r\nfrom example_app.tests.test_app.models import TestModel\r\n\r\n\r\nclass TestOverridingInstalledApps(TestCase):\r\n    def setUp(self):\r\n        self.test_model = TestModel.objects.create(\r\n            field_a=1,\r\n            field_b=2,\r\n        )\r\n\r\n    def test_objects(self):\r\n        self.assertEqual(TestModel.objects.count(), 1)\r\n```\r\n\r\nBut if you run the tests like this, the test will fail and return something similar than that:\r\n\r\n**./manage.py test**\r\n\r\n```\r\ndjango.db.utils.ProgrammingError: relation \"test_app_testmodel\" does not exist\r\nLINE 1: INSERT INTO \"test_app_testmodel\" (\"field_a\", \"field_b\") VALU...\r\n```\r\n\r\nIt fails because Django needs to have `TestModel` registered in INSTALLED_APPS but we don't really want to add our `example_app.tests.test_app` to INSTALLED_APPS because we only need it when we run the tests. \r\n\r\nThe solution is to to add the test_app to the settings with [modify_settings](https://docs.djangoproject.com/en/dev/topics/testing/tools/#django.test.SimpleTestCase.modify_settings) and calling migrate.\r\n\r\n**test_models.py**\r\n\r\n```python\r\nfrom django.core.management import call_command\r\nfrom django.test import TestCase, modify_settings\r\n\r\nfrom example_app.tests.test_app.models import TestModel\r\n\r\n\r\n@modify_settings(INSTALLED_APPS={\r\n    'append': 'example_app.tests.test_app',\r\n})\r\nclass TestOverridingInstalledApps(TestCase):\r\n    def setUp(self):\r\n        call_command('migrate', run_syncdb=True)\r\n        self.test_model = TestModel.objects.create(\r\n            field_a=1,\r\n            field_b=2,\r\n        )\r\n\r\n    def test_objects(self):\r\n        self.assertEqual(TestModel.objects.count(), 1)\r\n```\r\n\r\n\r\nYou can see the complete source code [here](https://github.com/abel-castro/creating_models_in_tests_example).",
    date: '2021-04-17',
    tags: [
      {
        name: 'Testing',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'Test inheritance with python (and Django)',
    slug: 'test-inheritance-with-python',
    meta_description:
      'Example of test inheritance with python, Django and pytest.',
    content:
      'Let\'s image that we have this models: \r\n\r\n\r\n**models.py**\r\n\r\n```python\r\nclass Athlete(models.Model):\r\n    name = models.CharField(max_length=255)\r\n    slug = models.SlugField(max_length=300, unique=True)\r\n    age = models.PositiveIntegerField()\r\n\r\n    class Meta:\r\n        abstract = True\r\n\r\n\r\nclass BasketballPlayer(Athlete):\r\n    points_scored = models.PositiveIntegerField()\r\n    assists = models.PositiveIntegerField()\r\n    rebounds = models.PositiveIntegerField()\r\n\r\n    def __str__(self):\r\n        return self.name\r\n\r\n\r\nclass SoccerPlayer(Athlete):\r\n    goals_scored = models.PositiveIntegerField()\r\n    assists = models.PositiveIntegerField()\r\n    yellow_cards = models.PositiveIntegerField()\r\n\r\n    def __str__(self):\r\n        return self.name\r\n\r\n```\r\n\r\nWe also provide these 2 GET endpoints:\r\n\r\n  - api/athletes/basketball-player/[slug]\r\n  - api/athletes/soccer-player/[slug]\r\n\r\n\r\nAnd we want to test that every endpoint returns a 200 code and also be sure that serialized data looks like we expect.\r\n\r\n\r\n**tests.py**\r\n\r\n```python\r\nclass TestBasketballPlayerAPI(TestCase):\r\n    def setUp(self) -> None:\r\n        self.basketball_player = create_test_basketball_player()\r\n\r\n    def test__response_ok(self):\r\n        url = reverse_lazy(\r\n            "basketball_player", kwargs={"slug": self.basketball_player.slug}\r\n        )\r\n        response = self.client.get(url)\r\n\r\n        assert response.status_code == 200\r\n        assert response.data == BasketballPlayerSerializer(self.basketball_player).data\r\n\r\n\r\nclass TestSoccerPlayerAPI(TestCase):\r\n    def setUp(self) -> None:\r\n        self.soccer_player = create_test_soccer_player()\r\n\r\n    def test__response_ok(self):\r\n        url = reverse_lazy("soccer_player", kwargs={"slug": self.soccer_player.slug})\r\n        response = self.client.get(url)\r\n\r\n        assert response.status_code == 200\r\n        assert response.data == SoccerPlayerSerializer(self.soccer_player).data\r\n```\r\n\r\nBoth test classes `TestBasketballPlayerAPI` and `TestSoccerPlayerAPI` are very similar. Both check that a 200 is returned and the serialized data. \r\n\r\nLet\'s try to refactor this. We could make a base class `AthleteTest` for the tests and inherit from it.\r\n\r\n\r\n```python\r\nclass AthleteTest(TestCase):\r\n    view_name = ""\r\n    serializer_class = None\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = None\r\n\r\n    @mark.django_db\r\n    def test__response_ok(self):\r\n        url = reverse_lazy(\r\n            self.view_name, kwargs={"slug": self.test_athlete.slug}\r\n        )\r\n        response = self.client.get(url)\r\n\r\n        assert response.status_code == 200\r\n        assert response.data == self.serializer_class(self.test_athlete).data\r\n\r\n\r\nclass TestBasketballPlayerAPI(AthleteTest):\r\n    view_name = "basketball_player"\r\n    serializer_class = BasketballPlayerSerializer\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = create_test_basketball_player()\r\n\r\n\r\nclass TestSoccerPlayerAPI(AthleteTest):\r\n    view_name = "soccer_player"\r\n    serializer_class = SoccerPlayerSerializer\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = create_test_soccer_player()\r\n\r\n```\r\n\r\nThe code is now much shorter and easier to extend with new test cases. But if we try to run pytest it will fail.\r\nPytest will collect 3 test cases and fail because `AthleteTest` is not actually a test case and it is only intended to be inherit from it.\r\n\r\nIn order to avoid this problem we can use the option `__test__`. After adding it the test will look like this:\r\n\r\n```python\r\nclass AthleteTest(TestCase):\r\n    __test__ = False\r\n    view_name = ""\r\n    serializer_class = None\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = None\r\n\r\n    @mark.django_db\r\n    def test__response_ok(self):\r\n        url = reverse_lazy(\r\n            self.view_name, kwargs={"slug": self.test_athlete.slug}\r\n        )\r\n        response = self.client.get(url)\r\n        assert response.status_code == 200\r\n        assert response.data == self.serializer_class(self.test_athlete).data\r\n\r\n\r\nclass TestBasketballPlayerAPI(AthleteTest):\r\n    __test__ = True\r\n    view_name = "basketball_player"\r\n    serializer_class = BasketballPlayerSerializer\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = create_test_basketball_player()\r\n\r\n\r\nclass TestSoccerPlayerAPI(AthleteTest):\r\n    __test__ = True\r\n    view_name = "soccer_player"\r\n    serializer_class = SoccerPlayerSerializer\r\n\r\n    def setUp(self) -> None:\r\n        self.test_athlete = create_test_soccer_player()\r\n```\r\n\r\nNow pytest will only collect 2 test and pass as expected.\r\n\r\n\r\nCheckout the complete source code [here](https://github.com/abel-castro/test-inheritance-example).\r\n\r\nNote: this method only works with pytest and NOT with the Django test runner.',
    date: '2021-03-26',
    tags: [
      {
        name: 'Testing',
      },
      {
        name: 'Pytest',
      },
      {
        name: 'Django',
      },
    ],
  },
  {
    title: 'My first post',
    slug: 'my-first-post',
    meta_description:
      "This blog is built with Django because I thought that if I'm going to write about Django and Python it makes sense that this blog is made with them.",
    content:
      'Hi Internet! Welcome to my blog. I will write about topics mostly related to Python and in special to Django.\r\n\r\nThis blog is also built with Django because I thought that if I\'m going to write about Django and Python it makes sense that this blog is made with them.\r\n\r\nYou can find the source code in [my GitHub](https://github.com/abel-castro/abelcastro.dev).\r\n\r\nIt is a simple Django project with a Markdown editor for writing posts in the Django admin. For my me and this blog is exactly what I need but if you are looking for a CMS you should take a look to [Wagtail](http://wagtail.io).\r\n\r\n\r\nFeatures of my blog project:\r\n- Django + Postgres + Nginx\r\n- Markdown support powered by [Martor](https://github.com/agusmakmun/django-markdown-editor)\r\n- Dockerized development and production setups\r\n- HTTPS for production\r\n\r\nNote that the production environment is going to serve the media and static files with Nginx. I took the decision to have this "all-in-one setup" because I am not expecting to have a lot of traffic here. Please consider to use a cloud storage service if you are expecting more visitors in your website.',
    date: '2021-03-25',
    tags: [],
  },
];
