var hvConfig = {

  // PDF Export settings
    // This token is necessary for API calls to the PDF Exporter. To change this, in Confluence click your profile image > Personal Settings > Scroll PDF Exporter API Tokens (https://haivisioninfocenter.atlassian.net/wiki/plugins/servlet/ac/com.k15t.scroll.scroll-pdf/k15t-cxp-api-token-page)
    pdfBearerToken:      'aa0b3c6daa35814471997af0a7ca4596',
    
    // These are the default PDF template IDs to use in PDF exports, for Letter and A4 sizes. If the page doesn't contain an Export To PDF button, then these are used. To update, in Confluence click the Gear icon > under Scroll PDF Exporter click Templates. In the template you wish to use click ... > Template Information. Copy the ID value and paste here.
    pdfTemplateIDLetter: '69ac7180-c478-47e8-a5f8-0b5e2e8c58c7',
    pdfTemplateIDA4:     '1461ba7c-3762-4b9a-8898-5994d5557549',

    // Add a server outage message. Update with the proper dates. Format of maintenanceTime is: new Date(YYYY, MM, DD)
    //     ***NOTE****: MM starts at 0 (Jan) and ends at 11 (Dec)
    // Sample message: "Server maintenance will occur on November 3, 2023 at approximately 4:00AM EDT. Expect up to 2 hours of downtime.""

    maintenanceDate:      new Date(2023, 10, 3),
    maintenanceTime:      '4:00AM EDT',
    maintenanceDuration:  '2 hours',

  // This is used for users who have bookmarks of our old Server site. The URL construction was "HMP3.8" versus now which is "HMP/3.8". If the redirect value doesn't exist, then the same value is implied. There is no need to update this as products are added, as they wouldn't have been in users old bookmarks. For example, AIr, Pro, Rack were not yet converted to the Server instance.
  productRedirect: {
              "Command360": {},
              "CDVR":       {},
              "CS":         {"redirect": "CoolSign"},
              "EMS":        {},
              "Furnace":    {},
              "hai1000":    {}, 
              "HaiHelper":  {},
              "HMG":        {},
              "HMP":        {},
              "Hub":        {},
              "Hub360":     {},
              "KB":         {},
              "Kraken":     {},
              "LightFlow":  {},
              "MakitoDec":  {},
              "MakitoEnc":  {},
              "MakitoXDec": {},
              "MakitoXEnc": {},
              "MFXE":       {},
              "MakitoX1Enc": {},
              "MakitoX4Dec": {},
              "MakitoX4Enc": {},
              "Mantaray":   {},
              "MJPiOS":     {},
              "HPM":        {},
              "HPPM":       {},
              "PlayProiOS": {},
              "STB":        {"redirect": "Play1000STB"},
              "Play20004000STB": {},
              "Stingray":   {},
              "StreamHub":  {},
              "Torpedo":    {}
            },

  // List of spaces you want to hide from search results
  hiddenSpaces:        ['Inclusion Library'],

  // List of product version redirects. For example, MakitoXEnc 2.5.3 and 2.5.4 have the same documentation as 2.5.2. This also shows a popup when viewing the olderVersion documentation that it applies to the newerVersions as well.
  // Note: you can have multiple prefix entries if there are multiple different redirects. For example, see the commented out section.
  redirects : [
                { 'prefix': 'MakitoXDec',
                  'olderVersion':   '2.5.2',
                  'newerVersions': ['2.5.3']
                },
// THIS IS JUST AN EXAMPLE. DO NOT UNCOMMENT
//                { 'prefix': 'MakitoXEnc',
//                  'olderVersion':   '2.4',
//                  'newerVersions': ['2.4.3', '2.4.2', '2.4.1']
//                }.
                { 'prefix': 'MakitoXEnc',
                  'olderVersion':   '2.5.2',
                  'newerVersions': ['2.5.3', '2.5.4']
                }
             ],

  // List of valid variants and their IDs necessary for PDF exports. To find these values, in the Confluence space, click Document Toolbox > Read icon. Select the variant in the dropdown. Click the Share icon > Copy icon. The resulting URL shows the variant ID. For example:
  //   https://haivisioninfocenter.atlassian.net/wiki/plugins/servlet/ac/k15t-scroll-document-versions-for-confluence/k15t-docs-document-viewer?content.id=18428819#!/view/18387903?pageId=18382917&variantId=75a02b4af9de6080ddcc8464c9c00f45
  // Also, lists valid Transmitter variant/version combinations. For example, Air 5.3.1 exists, but 3.5 does not
  variants: { 
    "transmitters": [
      {
        'variant': 'Air',
        'variantId': 'b7d408e64aa8cb3c490819e3c48a8325',
        'versions': ['5.3.1']
      },
      {
        'variant': 'Pro3',
        'variantId': '86da7b3392964e34996b43f4446a4589',
        'versions': ['5.3.1']
      },
      {
        'variant': 'Rack200 & Rack300',
        'variantId': 'ffb7362a6e50642fa62d414e7c4ad118',
        'versions': ['5.3.1']
      },
      {
        'variant': 'Pro460',
        'variantId': 'a13d712ff5175366a5251e0bddae761a',
        'versions': ['3.5']
      },
      {
        'variant': 'Rack400',
        'variantId': '61d254219f7ed6aa202a26272bef005a',
        'versions': ['3.5']
      }
    ],
    "hub": [
      {
        'variant': 'Hub',
        'variantId': '75a02b4af9de6080ddcc8464c9c00f45'
      },
      {
        'variant': 'HUB-GOV',
        'variantId': '5393325de7a06b5cc8813b4c156555de'
      }
    ]
  }
}