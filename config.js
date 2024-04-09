var hvConfig = {

  // PDF Export settings
    
    // This token is necessary for API calls to the PDF Exporter. To change this, in Confluence click your profile image > Personal Settings > Scroll PDF Exporter API Tokens (https://haivisioninfocenter.atlassian.net/wiki/plugins/servlet/ac/com.k15t.scroll.scroll-pdf/k15t-cxp-api-token-page)
    pdfBearerToken:      'aa0b3c6daa35814471997af0a7ca4596',
    
    // These are the default PDF template IDs to use in PDF exports, for Letter and A4 sizes. If the page doesn't contain an Export To PDF button, then these are used. To update, in Confluence click the Gear icon > under Scroll PDF Exporter click Templates. In the template you wish to use click ... > Template Information. Copy the ID value and paste here.
    pdfTemplateIDLetter: '8a044238-48b2-4484-9ec6-fdbc3e7df4f5',
    pdfTemplateIDA4:     'b0be2f1b-fac2-43b6-9256-673607eac403',

  // This is used for users who have bookmarks of our old Server site. The URL construction was "HMP3.8" versus now which is "HMP/3.8". If the redirect value doesn't exist, then the same value is implied. There is no need to update this as products are added, as they wouldn't have been in users old bookmarks. For example, AIr, Pro, Rack were not yet converted to the Server instance.
  productRedirectJSON: {
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

  // List of valid transmitter variants/version combinations. For example, Air 5.3.1 exists, but 3.5 does not
  // The variantId's are necessary for PDF exports
  transmittersVariants: [
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
    ]
}