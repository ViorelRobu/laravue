<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Project</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    </head>
    <body>
        <section class="section" id="root">
            <ol type="1">
                @foreach ($projects as $project)
                    <li>{{ $project->name }}</li>
                @endforeach
            </ol>
            <hr>
            <example></example>
            {{-- form submission is successfull --}}
            <form @submit.prevent="form.closeMessage" v-if="form.success">
                <div class="notification is-primary">
                    <button class="delete"></button>
                    @{{ form.successMessage }}
                </div>
            </form>

            <form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                @csrf
                @method('POST')
                <div class="field">
                    <label class="label">Project name:</label>
                    <div class="control">
                        <input class="input" v-model="form.name" type="text" name="name" id="name" placeholder="Project name">
                        <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Project description:</label>
                    <div class="control">
                        <input class="input" v-model="form.description" type="text" name="description" id="description" placeholder="Project description">
                        <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                    </div>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" :disabled="form.errors.any()">
                        Create
                        </button>
                    </p>
                </div>
            </form>

        </section>
        <section id="app">
            <coupon v-model="coupon">
        </section>
        <script src="{{ mix('/js/manifest.js') }}"></script>
        <script src="{{ mix('/js/vendor.js') }}"></script>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
