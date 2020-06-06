export default {
  CreatedByVersion: '2.0.2.1',
  Schedule: {
    ID: 3,
    Tags: [
      'ID=3'
    ],
    Time: '2017-09-29T16:00:00Z',
    Repeat: '1h',
    LastRun: '2017-09-29T15:00:00Z',
    Rule: 'AllowedWeekDays=Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday',
    AllowedDays: [
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
      'sun'
    ]
  },
  Backup: {
    ID: '3',
    Name: 'hugo to b2 backblaze',
    Tags: [],
    TargetURL: 'b2://bucket-name//somedirectory?auth-username=6b871b52a751&auth-password=ba85238513ba',
    DBPath: '/config/AUDNDLSUN.sqlite',
    Sources: [
      '/source/surviving-data/',
      '/source/home/hugo/'
    ],
    Settings: [
      {
        Filter: '',
        Name: 'encryption-module',
        Value: 'aes',
        Argument: null
      },
      {
        Filter: '',
        Name: 'compression-module',
        Value: 'zip',
        Argument: null
      },
      {
        Filter: '',
        Name: 'dblock-size',
        Value: '50mb',
        Argument: null
      },
      {
        Filter: '',
        Name: 'keep-time',
        Value: '3M',
        Argument: null
      },
      {
        Filter: '',
        Name: 'passphrase',
        Value: 'This would be the passphrase.',
        Argument: null
      }
    ],
    Filters: [
      {
        Order: 0,
        Include: false,
        Expression: '/source/home/me/Downloads/'
      },
      {
        Order: 1,
        Include: false,
        Expression: '/source/home/me/backups/'
      }
    ],
    Metadata: {
      LastDuration: '00:35:37.2700380',
      LastStarted: '20170929T150709Z',
      LastFinished: '20170929T154246Z',
      LastBackupDate: '20170929T150709Z',
      BackupListCount: '14',
      TotalQuotaSpace: '0',
      FreeQuotaSpace: '0',
      AssignedQuotaSpace: '-1',
      TargetFilesSize: '122962361042',
      TargetFilesCount: '4682',
      TargetSizeString: '114.52 GB',
      SourceFilesSize: '178825172037',
      SourceFilesCount: '799444',
      SourceSizeString: '166.54 GB',
      LastBackupStarted: '20170929T150709Z',
      LastBackupFinished: '20170929T154246Z',
      LastErrorDate: '20170925T173807Z',
      LastErrorMessage: 'Found 3 files that are missing from the remote storage, please run repair'
    },
    IsTemporary: false
  },
  DisplayNames: {
    '/source/home/me/': 'me'
  }
}
