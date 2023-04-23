# Olly Hensby Music Webpage

## Deployed Website

To see the website deployed, visit https://ollyhensby.com/. (Assuming I remember to paid the service to host it 🙂)

## Installing Development Environment

Assuming that you have conda installed and are in the root directory.

```bash
conda env create -f environment-dev.yml
```

## To Run Locally

Firstly, activate the dev environment:

```bash
conda activate music-website-django-dev
```

Change to the `mysite` directory and run:

```bash
python manage.py runserver
```

Then open a web browser application of your choosing and go to:

`http://127.0.0.1:8000/`

Once loaded, the website will load.
