export function getFormDefinition(formName) {
  return {
    name: 'Autoverzekering',
    dictionary: {
      success: 'Succeeded',
      loading: 'Een ogenblik geduld alstublieft...',
      error: 'An unknown error occured',
      backStep: 'Vorige stap',
      nextStep: 'Volgende stap'
    },
    steps: [
      {
        key: 'step-1',
        name: 'Auto en bestuurder',
        showName: true,
        navigation: {
          showBack: false,
          showNext: true,
          backLabel: null,
          nextLabel: 'Kies uw dekking'
        }
      },
      {
        key: 'step-2',
        name: 'Kies uw dekking',
        showName: true,
        navigation: {
          showBack: true,
          showNext: false
        },
        loadDataFromServer: true
      },
      {
        key: 'step-3',
        name: 'Uitbreidingen',
        showName: true,
        navigation: {
          showBack: true,
          showNext: true
        },
        loadDataFromServer: true
      },
      {
        key: 'step-4',
        name: 'Aanvullende gegevens',
        showName: true,
        navigation: {
          showBack: true,
          showNext: true
        }
      },
      {
        key: 'step-5',
        name: 'Uw betaalgegevens',
        showName: true,
        navigation: {
          showBack: true,
          showNext: true
        }
      },
      {
        key: 'step-6',
        name: 'Slotvragen',
        showName: true,
        navigation: {
          showBack: true,
          showNext: true
        }
      },
      {
        key: 'step-7',
        name: 'Overzicht & aanvragen',
        showName: false,
        intro:
          'Op deze pagina vatten we samen welke keuzes u heeft gemaakt en welke gegevens u heeft ingevuld. Klopt alles? Sluit dan deze verzekering af. U kunt terug naar de vorige stap als u nog iets wilt aanpassen.',
        navigation: {
          showBack: true,
          showNext: true,
          nextLabel: 'Sluit deze verzekering af'
        }
      },
      {
        key: 'confirmation',
        showName: false,
        navigation: {
          showBack: false,
          showNext: false
        },
        loadDataFromServer: true
      }
    ],
    fieldSets: [
      {
        key: 'step-1.licensePlate',
        step: 'step-1',
        title: 'Uw kenteken'
      },
      {
        key: 'step-1.vehicleData',
        step: 'step-1',
        showIf: "formState['licensePlate.__success']"
      },
      {
        key: 'step-1.driverDetails',
        step: 'step-1',
        title: 'Gegevens bestuurder',
        showIf: "formState['licensePlate.__success']"
      },
      {
        key: 'step-2.choosePackage',
        step: 'step-2'
      },
      {
        key: 'step-3.basisdekking',
        step: 'step-3',
        title: 'Basisdekking'
      },
      {
        key: 'step-3.uitbreidingen',
        step: 'step-3',
        title: 'Uitbreidingen'
      },
      {
        key: 'step-4.setupQuestions',
        step: 'step-4'
      },
      {
        key: 'step-4.applicantDetails',
        step: 'step-4',
        title: 'Gegevens aanvrager'
      },
      {
        key: 'step-4.applicantContactDetails',
        step: 'step-4',
        title: 'Contactgegevens aanvrager'
      },
      {
        key: 'step-4.driverDetails',
        step: 'step-4',
        title: 'Gegevens bestuurder',
        showIf: "formState['regularUser'] === '0'"
      },
      {
        key: 'step-4.licenseHolderDetails',
        step: 'step-4',
        title: 'Gegevens kentekenhouder',
        showIf: "formState['licenseHolder'] === '0'"
      },
      {
        key: 'step-4.vehicleData',
        step: 'step-4',
        title: 'Gegevens auto'
      },
      {
        key: 'step-5.startDate',
        step: 'step-5',
        title: 'Ingangsdatum',
        intro:
          'In het bevestigingsscherm leest u direct of u verzekerd bent op de gekozen ingangsdatum.'
      },
      {
        key: 'step-5.paymentDetails',
        step: 'step-5',
        title: 'Uw rekeninggegevens en betaaltermijn',
        intro: 'Betaalwijze via automatische incasso',
        outro:
          'Bent u al klant? Dan gebruiken we het rekeningnummer dat u eerder heeft opgegeven bij het afsluiten van uw verzekering. Wilt u dit wijzigen, neem dan contact met ons op. Dit bedrag is inclusief 21% assurantiebelasting en prolongatiekosten. Het bedrag is exclusief â‚¬ 11,13 poliskosten. We schrijven dit bedrag automatisch van uw rekening af.',
        outroTooltip: 'outro tooltip'
      },
      {
        key: 'step-6.finalQuestions',
        step: 'step-6'
      },
      {
        key: 'step-7.general',
        step: 'step-7',
        title: 'Algemeen'
      },
      {
        key: 'step-7.carDetails',
        step: 'step-7',
        title: 'Gegevens auto'
      },
      {
        key: 'step-7.driverDetails',
        step: 'step-7',
        title: 'Gegevens bestuurder',
        showIf: "formState['regularUser'] === '0'"
      },
      {
        key: 'step-7.applicantDetails',
        step: 'step-7',
        title: 'Gegevens aanvrager'
      },
      {
        key: 'step-7.licenseHolderDetails',
        step: 'step-7',
        title: 'Gegevens kentekenhouder'
      },
      {
        key: 'step-7.paymentDetails',
        step: 'step-7',
        title: 'Uw rekeninggegevens en betaaltermijn'
      },
      {
        key: 'confirmation',
        step: 'confirmation'
      }
    ],
    fields: [
      {
        key: 'licensePlate',
        fieldSet: 'step-1.licensePlate',
        title: 'Uw kenteken',
        type: 'text',
        label: 'License Plate',
        success: {
          show: false
        },
        loading: {
          show: true
        }
      },
      {
        key: 'licensePlate.__error',
        fieldSet: 'step-1.licensePlate',
        type: 'error',
        showIf: "formState['licensePlate.__error']"
      },
      {
        key: 'licensePlate.brand',
        fieldSet: 'step-1.vehicleData',
        type: 'label',
        label: 'Brand'
      },
      {
        key: 'licensePlate.model',
        fieldSet: 'step-1.vehicleData',
        type: 'label',
        label: 'Model'
      },
      {
        key: 'licensePlate.constructionYear',
        fieldSet: 'step-1.vehicleData',
        type: 'label',
        label: 'Bouwjaar'
      },
      {
        key: 'licensePlate.version',
        fieldSet: 'step-1.vehicleData',
        type: 'label',
        label: 'Uitvoering'
      },
      {
        key: 'licensePlate.listPriceIncludingVAT',
        fieldSet: 'step-1.vehicleData',
        type: 'label',
        label: 'Cataloguswaarde',
        tooltip:
          'Met het kenteken kunnen wij gegevens van uw auto opvragen zoals de cataloguswaarde. De getoonde waarde is de cataloguswaarde inclusief de opties die vanuit de fabriek zijn ingebouwd. Alles wat daarna is of nog wordt ingebouwd, is geen onderdeel van de cataloguswaarde. Dat zien wij als accessoires. Als u kiest voor de dekking WA + (Beperkt) Casco, zijn accessoires standaard meeverzekerd tot â‚¬&nbsp;1.250,-'
      },
      {
        key: 'driverDetails.dateOfBirth',
        fieldSet: 'step-1.driverDetails',
        type: 'date',
        label: 'Geboortedatum'
      },
      {
        key: 'driverDetails.postcode',
        fieldSet: 'step-1.driverDetails',
        type: 'text',
        label: 'Postcode'
      },
      {
        key: 'driverDetails.claimFreeYears',
        fieldSet: 'step-1.driverDetails',
        type: 'select',
        label: 'Aantal schadevrije jaren',
        tooltip: 'Aantal schadevrije jaren tooltip',
        options: [
          {
            value: '',
            text: 'Maak uw keuze',
            disabled: true
          },
          {
            value: '-3',
            text: '-3 of meer'
          },
          {
            value: '-2',
            text: '-2'
          },
          {
            value: '10',
            text: '10'
          }
        ]
      },
      {
        key: 'driverDetails.distancePerYear',
        fieldSet: 'step-1.driverDetails',
        type: 'select',
        label: 'Hoeveel kilometers rijdt u per jaar?',
        tooltip: 'Hoeveel kilometers rijdt u per jaar? tooltip',
        options: [
          {
            value: '',
            text: 'Maak uw keuze',
            disabled: true
          },
          {
            value: '2000',
            text: 'Maximaal 2.000 km'
          },
          {
            value: '10000',
            text: 'Maximaal 10.000 km'
          }
        ]
      },
      {
        key: 'choosePackage',
        fieldSet: 'step-2.choosePackage',
        type: 'choosePackage'
      },
      {
        key: 'licensePlate',
        fieldSet: 'step-3.vehicleData',
        type: 'label',
        label: 'Kenteken'
      },
      {
        key: 'licensePlate.brand',
        fieldSet: 'step-3.vehicleData',
        type: 'label',
        label: 'Merk'
      },
      {
        key: 'licensePlate.model',
        fieldSet: 'step-3.vehicleData',
        type: 'label',
        label: 'Model'
      },
      {
        key: 'baseProduct',
        fieldSet: 'step-3.basisdekking',
        type: 'checkoutItems',
        options: {
          items: [
            {
              code: '$state:choosePackage.code',
              label: '$state:choosePackage.name',
              tooltip: '$state:choosePackage.tooltip',
              selected: true,
              readOnly: true
            }
          ]
        }
      },
      {
        key: 'uitbreidingen',
        fieldSet: 'step-3.uitbreidingen',
        type: 'checkoutItems',
        options: {
          items: [
            {
              code: 'legalAid',
              label: 'Rechtsbijstand',
              tooltip: 'Rechtsbijstand tooltip'
            },
            {
              code: 'passengerDamage',
              label: 'Inzittenden Plus',
              tooltip: 'Inzittenden Plus tooltip'
            }
          ],
          pricing: {
            total: 72.12,
            taxPercentage: 21,
            adminCharge: 11.13
          }
        }
      },
      {
        key: 'privateUse',
        fieldSet: 'step-4.setupQuestions',
        type: 'radio',
        label: 'Gebruikt u de auto alleen privÃ©?',
        tooltip: 'Gebruikt u de auto alleen privÃ©? tooltip',
        options: {
          items: [
            {
              value: '1',
              text: 'Ja'
            },
            {
              value: '0',
              text: 'Nee'
            }
          ]
        }
      },
      {
        key: 'regularUser',
        fieldSet: 'step-4.setupQuestions',
        type: 'radio',
        label: 'Bent u de regelmatige bestuurder?',
        tooltip: 'Bent u de regelmatige bestuurder? tooltip',
        options: {
          items: [
            {
              value: '1',
              text: 'Ja'
            },
            {
              value: '0',
              text: 'Nee'
            }
          ]
        }
      },
      {
        key: 'licenseHolder',
        fieldSet: 'step-4.setupQuestions',
        type: 'radio',
        label: 'Bent u kentekenhouder?',
        tooltip: 'Bent u kentekenhouder? tooltip',
        options: {
          items: [
            {
              value: '1',
              text: 'Ja'
            },
            {
              value: '0',
              text: 'Nee'
            }
          ]
        }
      },
      {
        key: 'salutation',
        fieldSet: 'step-4.applicantDetails',
        type: 'radio',
        label: 'Aanhef',
        options: {
          items: [
            {
              value: 'M',
              text: 'De heer'
            },
            {
              value: 'V',
              text: 'Mevrouw'
            }
          ]
        }
      },
      {
        key: 'firstName',
        fieldSet: 'step-4.applicantDetails',
        type: 'text',
        label: 'Voorletter(s)',
        required: true
      },
      {
        key: 'infix',
        fieldSet: 'step-4.applicantDetails',
        type: 'text',
        label: 'Tussenvoegsel',
        placeholder: 'Optioneel'
      },
      {
        key: 'lastName',
        fieldSet: 'step-4.applicantDetails',
        type: 'text',
        label: 'Achternaam',
        required: true
      },
      {
        key: 'driverDetails.dateOfBirth',
        fieldSet: 'step-4.applicantDetails',
        type: 'date',
        label: 'Geboortedatum',
        required: true
      },
      {
        key: 'driverDetails.postcode',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Postcode',
        required: true
      },
      {
        key: 'driverDetails.houseNumber',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Huisnummer en toevoeging',
        required: true
      },
      {
        key: 'driverDetails.street',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Straat',
        required: true
      },
      {
        key: 'driverDetails.city',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Woonplaats',
        required: true
      },
      {
        key: 'driverDetails.phone',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Telefoonnummer',
        required: true
      },
      {
        key: 'driverDetails.email',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'E-mailadres',
        required: true
      },
      {
        key: 'driverDetails.emailConfirm',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'text',
        label: 'Herhaal uw e-mailadres',
        subtext: 'Op dit adres ontvangt u een bevestiging van uw aanvraag.',
        required: true
      },
      {
        key: 'driverDetails.newsletter',
        fieldSet: 'step-4.applicantContactDetails',
        type: 'checkbox',
        label: 'Inschrijving nieuwsbrief',
        value: 'y',
        text:
          'Wilt u per e-mail op de hoogte blijven van onze ontwikkelingen, zoals nieuwe verzekeringen en speciale acties?'
      },
      {
        key: 'driverDetails.name',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Naam',
        required: true
      },
      {
        key: 'driverDetails.dateOfBirth',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Geboortedatum',
        required: true
      },
      {
        key: 'driverDetails.postcode',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Postcode',
        required: true
      },
      {
        key: 'driverDetails.houseNumber',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Huisnummer en toevoeging',
        required: true
      },
      {
        key: 'driverDetails.street',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Straat',
        required: true
      },
      {
        key: 'driverDetails.city',
        fieldSet: 'step-4.driverDetails',
        type: 'text',
        label: 'Woonplaats',
        required: true
      },
      {
        key: 'licenseHolderDetails.name',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Naam',
        required: true
      },
      {
        key: 'licenseHolderDetails.dateOfBirth',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Geboortedatum',
        required: true
      },
      {
        key: 'licenseHolderDetails.postcode',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Postcode',
        required: true
      },
      {
        key: 'licenseHolderDetails.houseNumber',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Huisnummer en toevoeging',
        required: true
      },
      {
        key: 'licenseHolderDetails.street',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Straat',
        required: true
      },
      {
        key: 'licenseHolderDetails.city',
        fieldSet: 'step-4.licenseHolderDetails',
        type: 'text',
        label: 'Woonplaats',
        required: true
      },
      {
        key: 'licensePlate',
        fieldSet: 'step-4.vehicleData',
        type: 'text',
        label: 'Kenteken',
        readOnly: true,
        disabled: true
      },
      {
        key: 'meldCode',
        fieldSet: 'step-4.vehicleData',
        type: 'text',
        label: 'Meldcode',
        tooltip: 'Meldcode tooltip',
        required: true,
        success: {
          show: true,
          label: 'Meldcode is juist!'
        }
      },
      {
        key: 'carSecurity',
        fieldSet: 'step-4.vehicleData',
        type: 'select',
        label: 'Welke beveiliging heeft uw auto?',
        required: true,
        options: [
          {
            value: '',
            text: 'Maak uw keuze',
            disabled: true
          },
          {
            value: '60',
            text: 'Geen beveiligingsklasse'
          },
          {
            value: '61',
            text: 'Startonderbreker met eigen autorisatie'
          },
          {
            value: '62',
            text: 'Alarmsysteem'
          },
          {
            value: '63',
            text: 'Alarmsysteem met hellingshoekdetectie'
          },
          {
            value: '64',
            text: 'Voertuigvolgsteem'
          },
          {
            value: '65',
            text: 'Alarmsysteem met hellingshoekdetectie + voertuigvolgsysteem'
          }
        ]
      },
      {
        key: 'startDate',
        fieldSet: 'step-5.startDate',
        type: 'date'
      },
      {
        key: 'iban',
        fieldSet: 'step-5.paymentDetails',
        type: 'text',
        label: 'Bankrekening (IBAN)',
        required: true,
        placeholder: 'NL 12345'
      },
      {
        key: 'price',
        fieldSet: 'step-5.paymentDetails',
        type: 'label',
        label: 'U betaalt per maand'
      },
      {
        key: 'final1',
        fieldSet: 'step-6.finalQuestions',
        type: 'radio',
        intro:
          'Heeft u of Ã©Ã©n van de personen die u wilt meeverzekeren, bijvoorbeeld uw gezinsleden of huisgenoten, ooit een verzekering aangevraagd die door een verzekeraar is geweigerd, opgezegd of tegen bijzondere voorwaarden geaccepteerd?',
        options: {
          items: [
            {
              value: '1',
              text: 'Ja'
            },
            {
              value: '0',
              text: 'Nee'
            }
          ]
        }
      },
      {
        key: 'bedenktijd',
        fieldSet: 'step-6.finalQuestions',
        title: 'Bedenktijd',
        intro:
          'U heeft 14 dagen bedenktijd. Wilt u toch geen gebruik maken van de verzekering, dan kunt u dit per e-mail aan ons doorgeven. Wij annuleren dan kosteloos de verzekering op de ingangsdatum. Het is dan alsof u niet verzekerd bent geweest. U kunt geen beroep doen op de verzekering en schades nemen wij niet in behandeling. De bedenktijd geldt niet voor verzekeringen met een looptijd van minder dan Ã©Ã©n maand.'
      },
      {
        key: 'akkoordverklaring',
        fieldSet: 'step-6.finalQuestions',
        title: 'Akkoordverklaring',
        intro: 'Ik verklaar dat: bla bla bla',
        type: 'checkbox',
        value: 'y',
        text: 'Ik ga akkoord',
        required: true
      },
      {
        key: 'verzekeringskaart',
        fieldSet: 'step-6.finalQuestions',
        title: 'Verzekeringskaart',
        intro:
          'Ik ga akkoord dat de verzekeringskaart van deze verzekering digitaal aan mij wordt verstrekt.',
        type: 'checkbox',
        value: 'y',
        text: 'Ik ga akkoord',
        required: true
      },
      {
        key: 'choosePackage.name',
        fieldSet: 'step-7.general',
        label: 'Product',
        type: 'label'
      },
      {
        key: 'choosePackage.price',
        fieldSet: 'step-7.general',
        label: 'U betaalt per maand',
        type: 'label',
        getValue: 'TODO: Get from response'
      },
      {
        key: 'licensePlate',
        fieldSet: 'step-7.carDetails',
        label: 'Kenteken',
        type: 'label'
      },
      {
        key: 'meldCode',
        fieldSet: 'step-7.carDetails',
        label: 'Meldcode',
        type: 'label'
      },
      {
        key: 'licensePlate.brand',
        fieldSet: 'step-7.carDetails',
        label: 'Merk',
        type: 'label'
      },
      {
        key: 'licensePlate.model',
        fieldSet: 'step-7.carDetails',
        label: 'Model',
        type: 'label'
      },
      {
        key: 'licensePlate.constructionYear',
        fieldSet: 'step-7.carDetails',
        label: 'Bouwjaar',
        type: 'label'
      },
      {
        key: 'licensePlate.version',
        fieldSet: 'step-7.carDetails',
        label: 'Uitvoering',
        type: 'label'
      },
      {
        key: 'licensePlate.listPriceIncludingVAT',
        fieldSet: 'step-7.carDetails',
        label: 'Cataloguswaarde',
        type: 'label'
      },
      {
        key: 'licensePlate.onlyPrivate',
        fieldSet: 'step-7.carDetails',
        label: 'Gebruikt u de auto alleen prive?',
        type: 'label',
        getValue: 'Ja'
      },
      {
        key: 'salutation',
        fieldSet: 'step-7.driverDetails',
        label: 'Aanhef',
        type: 'label'
      },
      {
        key: 'startDate',
        fieldSet: 'step-7.paymentDetails',
        label: 'Ingangsdatum',
        type: 'label'
      },
      {
        key: 'iban',
        fieldSet: 'step-7.paymentDetails',
        label: 'Bankrekening (IBAN)',
        type: 'label'
      },
      {
        key: 'paymentTerm',
        fieldSet: 'step-7.paymentDetails',
        label: 'Betaaltermijn',
        type: 'label',
        getValue: 'Maand'
      },
      {
        key: 'paymentMethod',
        fieldSet: 'step-7.paymentDetails',
        label: 'Betaalwijze',
        type: 'label',
        getValue: 'Automatische incasso'
      },
      {
        key: 'confirmation',
        fieldSet: 'confirmation',
        type: 'confirmation'
      }
    ],
    state: {
      'step.active': 0,
      'step.reached': 0
    }
  }
}
