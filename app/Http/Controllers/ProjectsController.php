<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectsController extends Controller
{
    /**
     * Shows the page for a new project
     */
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'description' => 'required'
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]);

        return ['message' => 'Project created!'];
    }
}
