import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#JihipsterRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#JihipsterCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#JihipsterLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#JihipsterDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#JihipsterTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#JihipsterEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#JihipsterJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#JihipsterJobHistoryModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JihipsterEntityModule {}
