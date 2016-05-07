/**
 * @file        Main file of Yeoman generator for AngularJS
 * @author      Karol Altamirano <karlos.altamirano@gmail.com>
 * @copyright   2016 Karol Altamirano
 * @license     MIT
 */

'use strict';

var generators = require('yeoman-generator'),
    chalk      = require('chalk'),
    yosay      = require('yosay'),
    _          = require('lodash');

module.exports = generators.Base.extend({
    prompting: function () {
        this.log(yosay('Welcome to the ' + chalk.green('AngularJS') + ' generator!'));

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name (use camelCase)',
                default: _.camelCase(this.appname)
            }
        ];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
        }.bind(this));
    },

    writing: function () {
        // copy all files except .gitignore and package.json
        this.fs.copy(
            this.templatePath('**/!(.gitignore|.npmignore|package.json)'),
            this.destinationPath(), { globOptions: { dot: true } }
        );

        // copy .gitignore
        if (this.fs.exists(this.templatePath('.npmignore'))) {
            this.fs.copy(
                this.templatePath('.npmignore'),
                this.destinationPath('.gitignore')
            );
        } else {
            this.fs.copy(
                this.templatePath('.gitignore'),
                this.destinationPath('.gitignore')
            );
        }

        // copy package.json
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            { name: _.camelCase(this.props.name) }
        );
    },

    install: function () {
        this.npmInstall();
    }
});
