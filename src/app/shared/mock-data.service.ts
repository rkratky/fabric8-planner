import { Logger } from './../shared/logger.service';

import { Injectable } from '@angular/core';
import { WorkItem } from '../work-item/work-item';

/*
  NOTE: IMPORTANT:
    if returning data to the http service, ALWAYS return vanity copies of
    objects, NOT THE LIVING REFERENCES TO STRUCTURES STORED HERE. As the "real"
    networked service always returns detached object copies, this resembles the
    original behaviour. Also, the returnes references ARE RE-USED, so data could
    change without this class noticing it! THIS HAPPENS. IT HAPPENED. IT SUCKS!
*/

@Injectable()
export class MockDataService {

  private workItems: any[];
  private workItemLinks: any[];

  constructor() {
    this.workItems = this.createInitialWorkItems();
    this.workItemLinks = this.createInitialWorkItemLinks();
  }

  private createId(): string {
    var id = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++)
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log('Created new id ' + id);
    return id;
  }

  private makeCopy(input: any): any {
    return JSON.parse(JSON.stringify(input));
  }

  // data accessors

  public getWorkItemLinks(): any {
    return this.makeCopy(this.workItemLinks);
  }

  public getWorkItems(): any {
    return this.makeCopy(this.workItems);
  }

  public createWorkItemLink(workItemLink: any): any {
    var localWorkItemLink = this.makeCopy(workItemLink);
    localWorkItemLink.id = this.createId();
    this.workItemLinks.push(localWorkItemLink);
    return this.makeCopy(localWorkItemLink);
  }

  public createWorkItem(workItem: any): any {
    var localWorkItem = this.makeCopy(workItem);
    localWorkItem.id = this.createId();
    this.workItems.push(localWorkItem);
    return this.makeCopy(localWorkItem);
  }

  public getWorkItem(id: string): any {
    for (var i = 0; i < this.workItems.length; i++)
      if (this.workItems[i].id === id)
        return this.makeCopy(this.workItems[i]);
  };

  public updateWorkItem(workItem: any): any {
    var localWorkItem = this.makeCopy(workItem);
    for (var i = 0; i < this.workItems.length; i++)
      if (this.workItems[i].id === localWorkItem.id) {
        this.workItems.splice(i, 1, localWorkItem);
        return this.makeCopy(localWorkItem);
      }
    return null;
  }

  public updateWorkItemLink(workItemLink: any): any {
    var localWorkItemLink = this.makeCopy(workItemLink);
    for (var i = 0; i < this.workItemLinks.length; i++)
      if (this.workItemLinks[i].id === localWorkItemLink.id) {
        this.workItemLinks.splice(i, 1, localWorkItemLink);
        return this.makeCopy(localWorkItemLink);
      }
    return null;
  }

  public deleteWorkItem(id: string): boolean {
    for (var i = 0; i < this.workItems.length; i++)
      if (this.workItems[i].id === id) {
        this.workItems.splice(i, 1);
        return true;
      }
      return false;
  }

  public deleteWorkItemLink(id: string): boolean {
    for (var i = 0; i < this.workItemLinks.length; i++)
      if (this.workItemLinks[i].id === id) {
        this.workItemLinks.splice(i, 1);
        return true;
      }
      return false;
  }

  public searchWorkItem(term: string): boolean {
    for (var i = 0; i < this.workItems.length; i++)
      if (this.workItems[i].fields['system.title'].indexOf(term) != -1) {
        return this.makeCopy(this.workItems[i]);
      }
      return false;
  }

  public getLoginStatus() {
    return {
      'status': 200,
      'responseText': 'Good Job'
    };
  }

  public getWorkItemTypes() {
    return [
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.userstory',
        'version': 0
      },
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.valueproposition',
        'version': 0
      },
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.fundamental',
        'version': 0
      },
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.experience',
        'version': 0
      },
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.feature',
        'version': 0
      },
      {
        'fields': {
          'system.assignee': {
            'required': false,
            'type': {
              'kind': 'user'
            }
          },
          'system.creator': {
            'required': true,
            'type': {
              'kind': 'user'
            }
          },
          'system.description': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.remote_item_id': {
            'required': false,
            'type': {
              'kind': 'string'
            }
          },
          'system.state': {
            'required': true,
            'type': {
              'baseType': 'string',
              'kind': 'enum',
              'values': [
                'new',
                'open',
                'in progress',
                'resolved',
                'closed'
              ]
            }
          },
          'system.title': {
            'required': true,
            'type': {
              'kind': 'string'
            }
          }
        },
        'name': 'system.bug',
        'version': 0
      }
    ];
  }

  public getUser(): any {
    return {
      'id': 'user0',
      'fullName': 'Example User 0',
      'imageURL': 'https://avatars.githubusercontent.com/u/2410471?v=3'
    };
  }

  public getAllUsers(): any {
    return [
      {
        attributes: {
          fullName: 'Example User 0',
          imageURL: 'https://avatars.githubusercontent.com/u/2410471?v=3'
        },
        id: 'user0',
        type: 'identities'
      }, {
        attributes: {
          fullName: 'Example User 1',
          imageURL: 'https://avatars.githubusercontent.com/u/2410472?v=3'
        },
        id: 'user1',
        type: 'identities'
      }, {
        attributes: {
          fullName: 'Example User 2',
          imageURL: 'https://avatars.githubusercontent.com/u/2410473?v=3'
        },
        id: 'user2',
        type: 'identities'
      }, {
        attributes: {
          fullName: 'Example User 3',
          imageURL: 'https://avatars.githubusercontent.com/u/2410474?v=3'
        },
        id: 'user3',
        type: 'identities'
      }
    ];
 }

  public getLinkCategories(): any {
    return {
      'data': {
        'attributes': {
          'description': 'A work item link category that is meant only for work item link types goverened by the system alone.',
          'name': 'system',
          'version': 0
        },
        'id': '6c5610be-30b2-4880-9fec-81e4f8e4fd76',
        'type': 'workitemlinkcategories'
      }
    };
  }

  public getWorkItemLinkTypes(): any {
    return [
        {
         'id': '4f8d8e8c-ab1c-4396-b725-105aa69a789c',
         'type': 'workitemlinktypes',
         'attributes': {
          'description': 'A test work item can if a the code in a pull request passes the tests.',
          'forward_name': 'story-story',
          'name': 'story-story',
          'reverse_name': 'story by',
          'topology': 'network', 
          'version': 0
        },
        // 'id': '40bbdd3d-8b5d-4fd6-ac90-7236b669af04',
        'relationships': {
          'link_category': {
            'data': {
              'id': 'c08d244f-ca36-4943-b12c-1cdab3525f12',
              'type': 'workitemlinkcategories'
            }
          },
          'source_type': {
            'data': {
              'id': 'system.userstory',
              'type': 'workitemtypes'
            }
          },
          'target_type': {
            'data': {
              'id': 'system.userstory',
              'type': 'workitemtypes'
            }
          }
      }
    },
    {
        'id': '9cd02068-d76e-4733-9df8-f18bc39002ee',
        'type': 'workitemlinktypes',
        'attributes': {
        'description': 'A test work item can if a the code in a pull request passes the tests.',
        'forward_name': 'abc-abc',
        'name': 'abc-abc',
        'reverse_name': 'story by',
        'topology': 'network', 
        'version': 0
      },
      // 'id': '40bbdd3d-8b5d-4fd6-ac90-7236b669af04',
      'relationships': {
        'link_category': {
          'data': {
            'id': 'c08d244f-ca36-4943-b12c-1cdab3525f12',
            'type': 'workitemlinkcategories'
          }
        },
        'source_type': {
          'data': {
            'id': 'system.userstory',
            'type': 'workitemtypes'
          }
        },
        'target_type': {
          'data': {
            'id': 'system.userstory',
            'type': 'workitemtypes'
          }
        }
    }
    }];
  }

  // initial data creators - might be loaded from fixtures in the future

  private createInitialWorkItems(): any {
    let workitems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((n) => {
      return {
        'attributes': { 
          'system.created_at': '0001-01-01T00:00:00Z', 
          'system.description': 'Description Text ' + n, 
          'system.remote_item_id': 'remote_id_' + n, 
          'system.state': 'new', 
          'system.title': 'Title Text ' + n, 
          'version': 6 
        }, 
        'id': 'id' + n, 
        'links': { 
          'self': 'http://mock.service/api/workitems/id' + n 
        }, 
        'relationships': { 
          'assignees': { }, 
          'baseType': { 
            'data': { 
              'id': 'system.userstory', 
              'type': 'workitemtypes' 
            } 
          }, 
          'comments': { 
            'links': { 
              'related': 'http://mock.service/api/workitems/id' + n + '/comments', 
              'self': 'http://mock.service/api/workitems/id' + n + '/relationships/comments' 
            } 
          }, 
          'creator': { 
            'data': { 
              'id': 'some-creator-id', 
              'type': 'identities' 
            } 
          } 
        }, 
        'type': 'workitems' 
      }
    });
    return workitems;
  }

  private createInitialWorkItemLinks(): any {
    return [
        {
            attributes: {
                version: 0
            },
            id: 'd66b0ad5-bca8-4642-a43c-80cc0c831b25',
            relationships: {
                link_type: {
                data: {
                    id: '4f8d8e8c-ab1c-4396-b725-105aa69a789c',
                    type: 'workitemlinktypes'
                }
                },
                source: {
                data: {
                    id: '3',
                    type: 'workitems'
                }
                },
                target: {
                data: {
                    id: '4',
                    type: 'workitems'
                }
                }
            },
            type: 'workitemlinks'
        },
        {
            attributes: {
                version: 0
            },
            id: 'c241e025-87a4-4c59-aed0-8333de346666',
            relationships: {
                link_type: {
                data: {
                    id: '9cd02068-d76e-4733-9df8-f18bc39002ee',
                    type: 'workitemlinktypes'
                }
                },
                source: {
                data: {
                    id: '3',
                    type: 'workitems'
                }
                },
                target: {
                data: {
                    id: '6',
                    type: 'workitems'
                }
                }
            },
            type: 'workitemlinks'
        },
        {
            attributes: {
                version: 0
            },
            id: 'dcaff8b1-8d4d-40c9-9408-c0f4dc1961c7',
            relationships: {
                link_type: {
                data: {
                    id: '4f8d8e8c-ab1c-4396-b725-105aa69a789c',
                    type: 'workitemlinktypes'
                }
                },
                source: {
                data: {
                    id: '3',
                    type: 'workitems'
                }
                },
                target: {
                data: {
                    id: '1',
                    type: 'workitems'
                }
                }
            },
            type: 'workitemlinks'
        }
    ];
  }
}