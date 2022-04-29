import React from 'react'
import './BootstrapTable.css';

interface BootstrapTableProps {

}

export const BootstrapTable: React.FC<BootstrapTableProps> = ({}) => {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Lead Score</th>
                                <th scope="col">Company</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                                    <a className="text-heading font-semibold" href="#">
                                        Robert Fox
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Web Designer</span>
                                </td>
                                <td data-label="Phone">
                                    <a className="text-current" href="mailto:robert.fox@example.com">robert.fox@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a className="text-current" href="tel:202-555-0152">202-555-0152</a>
                                </td>
                                <td data-label="Company">
                                    <span className="badge bg-soft-success text-success">7/10</span>
                                </td>
                                <td data-label="">
                                    <a className="text-current" href="#">Dribbble</a>
                                </td>
                                <td data-label="" className="text-end">
                                    <div className="dropdown">
                                        <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#!" className="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2"/>
                                    <a className="text-heading font-semibold" href="#">
                                        Darlene Robertson
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Developer</span>
                                </td>
                                <td data-label="Phone">
                                    <a className="text-current" href="mailto:darlene@example.com">darlene@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a className="text-current" href="tel:224-567-2662">224-567-2662</a>
                                </td>
                                <td data-label="Company">
                                    <span className="badge bg-soft-warning text-warning">5/10</span>
                                </td>
                                <td data-label="">
                                    <a className="text-current" href="#">Netguru</a>
                                </td>
                                <td data-label="" className="text-end">
                                    <div className="dropdown">
                                        <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#!" className="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {/* <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Theresa Webb
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Marketing Specialist</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:theresa.webb@example.com">theresa.webb@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:401-505-6800">401-505-6800</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-danger text-danger">2/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Figma</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Kristin Watson
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Sales Manager</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:cody.fisher@example.com">cody.fisher@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:307-560-8817">307-560-8817</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-success text-success">9/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Mailchimp</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Robert Fox
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Web Designer</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:robert.fox@example.com">robert.fox@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:202-555-0152">202-555-0152</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-success text-success">7/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Dribbble</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Darlene Robertson
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Developer</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:darlene@example.com">darlene@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:224-567-2662">224-567-2662</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-warning text-warning">5/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Netguru</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Theresa Webb
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Marketing Specialist</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:theresa.webb@example.com">theresa.webb@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:401-505-6800">401-505-6800</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-danger text-danger">2/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Figma</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Kristin Watson
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Sales Manager</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:cody.fisher@example.com">cody.fisher@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:307-560-8817">307-560-8817</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-success text-success">9/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Mailchimp</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Robert Fox
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Web Designer</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:robert.fox@example.com">robert.fox@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:202-555-0152">202-555-0152</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-success text-success">7/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Dribbble</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Job Title">
                                    <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                    <a class="text-heading font-semibold" href="#">
                                        Darlene Robertson
                                    </a>
                                </td>
                                <td data-label="Email">
                                    <span>Developer</span>
                                </td>
                                <td data-label="Phone">
                                    <a class="text-current" href="mailto:darlene@example.com">darlene@example.com</a>
                                </td>
                                <td data-label="Lead Score">
                                    <a class="text-current" href="tel:224-567-2662">224-567-2662</a>
                                </td>
                                <td data-label="Company">
                                    <span class="badge bg-soft-warning text-warning">5/10</span>
                                </td>
                                <td data-label="">
                                    <a class="text-current" href="#">Netguru</a>
                                </td>
                                <td data-label="" class="text-end">
                                    <div class="dropdown">
                                        <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <a href="#!" class="dropdown-item">
                                                Action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Another action
                                            </a>
                                            <a href="#!" class="dropdown-item">
                                                Something else here
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}