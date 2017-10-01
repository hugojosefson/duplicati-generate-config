export default [{
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
}]
