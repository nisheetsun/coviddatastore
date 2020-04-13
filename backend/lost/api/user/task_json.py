pipeline_data_json = {
 'description': 'dummy',
 'elements': [{'datasource': {'rawFilePath': 'dummy'}, 'peN': 0},
              {'peN': 1,
               'script': {'arguments': {'bbox': {'help': 'Add a dummy bbox '
                                                         'proposal as example.',
                                                 'value': 'false'},
                                        'line': {'help': 'Add a dummy line '
                                                         'proposal as example.',
                                                 'value': 'false'},
                                        'point': {'help': 'Add a dummy point '
                                                          'proposal as '
                                                          'example.',
                                                  'value': 'false'},
                                        'polygon': {'help': 'Add a dummy '
                                                            'polygon proposal '
                                                            'as example.',
                                                    'value': 'false'}},
                          'description': 'Request annotations for all images '
                                         'in a folder',
                          'envs': '["lost"]',
                          'id': 3,
                          'isDebug': False,
                          'name': 'no_ai.request_annos.py',
                          'path': 'request_annos.py'}},
              {'annoTask': {'assignee': 'newernew (group)',
                            'configuration': {'annos': {'actions': {'draw': True,
                                                                    'edit': True,
                                                                    'label': True},
                                                        'minArea': 250,
                                                        'multilabels': False},
                                              'img': {'actions': {'label': True},
                                                      'multilabels': False},
                                              'tools': {'bbox': True,
                                                        'junk': True,
                                                        'line': True,
                                                        'point': True,
                                                        'polygon': True}},
                            'instructions': 'Draw polygon',
                            'labelLeaves': [{'id': 34, 'maxLabels': '3'}],
                            'name': 'Single Image Annotation Task',
                            'selectedLabelTree': 34,
                            'type': 'sia',
                            'workerId': 5},
               'peN': 2},
              {'peN': 3,
               'script': {'arguments': {'file_name': {'help': 'Name of the '
                                                              'file with '
                                                              'exported bbox '
                                                              'annotations.',
                                                      'value': 'annos.csv'}},
                          'description': 'Export all annotations to a csv '
                                         'file.',
                          'envs': '["lost"]',
                          'id': 2,
                          'isDebug': False,
                          'name': 'no_ai.export_csv.py',
                          'path': 'export_csv.py'}},
              {'dataExport': {}, 'peN': 4}],
 'name': 'dummy',
 'templateId': 2}
