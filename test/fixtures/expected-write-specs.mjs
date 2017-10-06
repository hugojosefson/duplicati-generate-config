export default [
  {
    filename: 'Videos-Programming-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': 'Videos/Programming to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-Videos-Programming/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me/Videos/Programming'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me/Videos/Programming': '/home/me/Videos/Programming'
      }
    }, null, 2)

  },
  {
    filename: 'code-old-stuff-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': 'code/old-stuff to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-code-old-stuff/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me/code/old-stuff'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [
          {
            'Expression': '*/node_modules/',
            'Include': false,
            'Order': 0
          },
          {
            'Expression': '*/target/',
            'Include': false,
            'Order': 1
          }

        ],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me/code/old-stuff': '/home/me/code/old-stuff'
      }
    }, null, 2)

  },
  {
    filename: 'code-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': 'code to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-code/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me/code'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [
          {
            'Expression': '/source/home/me/code/old-stuff/',
            'Include': false,
            'Order': 0
          },
          {
            'Expression': '*/node_modules/',
            'Include': false,
            'Order': 1
          },
          {
            'Expression': '*/target/',
            'Include': false,
            'Order': 2
          }

        ],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me/code': '/home/me/code'
      }
    }, null, 2)

  },
  {
    filename: 'home-me-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': '/home/me to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-home-me/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [
          {
            'Expression': '/source/home/me/code/',
            'Include': false,
            'Order': 0
          },
          {
            'Expression': '/source/home/me/virtual-machines/',
            'Include': false,
            'Order': 1
          },
          {
            'Expression': '/source/home/me/Important Downloads/',
            'Include': false,
            'Order': 2
          },
          {
            'Expression': '/source/home/me/Downloads/',
            'Include': false,
            'Order': 3
          },
          {
            'Expression': '/source/home/me/duplicati/backups/',
            'Include': false,
            'Order': 4
          },
          {
            'Expression': '/source/home/me/lost+found/',
            'Include': false,
            'Order': 5
          },
          {
            'Expression': '/source/home/me/Videos/',
            'Include': false,
            'Order': 6
          },
          {
            'Expression': '/source/home/me/.Trash-1000/',
            'Include': false,
            'Order': 7
          },
          {
            'Expression': '*/node_modules/',
            'Include': false,
            'Order': 8
          },
          {
            'Expression': '*/target/',
            'Include': false,
            'Order': 9
          }

        ],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me': '/home/me'
      }
    }, null, 2)
  },
  {
    filename: 'Important-Downloads-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': 'Important Downloads to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-Important-Downloads/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me/Important Downloads'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me/Important Downloads': '/home/me/Important Downloads'
      }
    }, null, 2)
  },
  {
    filename: 'virtual-machines-Keep-to-b2-backblaze-duplicati-config.json',
    contents: JSON.stringify({
      'CreatedByVersion': '2.0.2.1',
      'Schedule': {
        'ID': 3,
        'Tags': [
          'ID=3'
        ],
        'Time': '2017-09-29T16:00:00Z',
        'Repeat': '1h',
        'LastRun': '2017-09-29T15:00:00Z',
        'Rule': 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
        'AllowedDays': [
          'mon',
          'tue',
          'wed',
          'thu',
          'fri',
          'sat',
          'sun'
        ]
      },
      'Backup': {
        'ID': '3',
        'Name': 'virtual-machines/Keep to b2 backblaze',
        'Tags': [],
        'TargetURL': 'b2://duplicati-virtual-machines-Keep/?auth-username=6b871b52a751&auth-password=ba85238513ba',
        'Sources': [
          '/source/home/me/virtual-machines/Keep'
        ],
        'Settings': [
          {
            'Filter': '',
            'Name': 'encryption-module',
            'Value': 'aes',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'compression-module',
            'Value': 'zip',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'dblock-size',
            'Value': '50mb',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'keep-time',
            'Value': '3M',
            'Argument': null
          },
          {
            'Filter': '',
            'Name': 'passphrase',
            'Value': 'This would be the passphrase.',
            'Argument': null
          }
        ],
        'Filters': [],
        'IsTemporary': false
      },
      'DisplayNames': {
        '/source/home/me/virtual-machines/Keep': '/home/me/virtual-machines/Keep'
      }
    }, null, 2)
  }
]
