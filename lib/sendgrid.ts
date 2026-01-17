// Mock SendGrid Integration
// In produzione, sostituire con la vera integrazione SendGrid

export interface EmailData {
  to: string
  from?: string
  subject: string
  text?: string
  html?: string
  templateId?: string
  dynamicTemplateData?: Record<string, unknown>
}

export interface SendGridResponse {
  success: boolean
  messageId?: string
  error?: string
}

// Mock: Invia email
export async function sendEmail(data: EmailData): Promise<SendGridResponse> {
  // Simula delay API
  await new Promise(resolve => setTimeout(resolve, 500))

  console.log('📧 Email sent (mock):', {
    to: data.to,
    subject: data.subject,
    from: data.from || 'noreply@doghero.it',
  })

  // Mock success response
  return {
    success: true,
    messageId: `msg_${Date.now()}`,
  }
}

// Template: Nuovo contatto per professionista
export async function sendNewContactEmail(
  professionalEmail: string,
  professionalName: string,
  contactData: {
    name: string
    email: string
    phone?: string
    message: string
    service?: string
  }
): Promise<SendGridResponse> {
  return sendEmail({
    to: professionalEmail,
    subject: `🐕 Nuovo contatto su PetLife da ${contactData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ee7712, #df5d08); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🐕 PetLife</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333;">Ciao ${professionalName}!</h2>
          <p style="color: #666;">Hai ricevuto un nuovo contatto sulla tua pagina PetLife.</p>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #ee7712; margin-top: 0;">Dettagli Contatto</h3>
            <p><strong>Nome:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Telefono:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.service ? `<p><strong>Servizio richiesto:</strong> ${contactData.service}</p>` : ''}
            <p><strong>Messaggio:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${contactData.message}</p>
          </div>
          
          <a href="mailto:${contactData.email}" style="display: inline-block; background: #ee7712; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Rispondi al Cliente
          </a>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>Questa email è stata inviata da PetLife</p>
          <p>© ${new Date().getFullYear()} PetLife - Tutti i diritti riservati</p>
        </div>
      </div>
    `,
  })
}

// Template: Conferma prenotazione per cliente
export async function sendBookingConfirmationEmail(
  customerEmail: string,
  customerName: string,
  bookingData: {
    professionalName: string
    service: string
    date?: string
    price?: number
  }
): Promise<SendGridResponse> {
  return sendEmail({
    to: customerEmail,
    subject: `✅ Richiesta inviata a ${bookingData.professionalName} - PetLife`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ee7712, #df5d08); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🐕 PetLife</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333;">Ciao ${customerName}!</h2>
          <p style="color: #666;">La tua richiesta è stata inviata con successo.</p>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #22c55e; margin-top: 0;">✅ Richiesta Inviata</h3>
            <p><strong>Professionista:</strong> ${bookingData.professionalName}</p>
            <p><strong>Servizio:</strong> ${bookingData.service}</p>
            ${bookingData.date ? `<p><strong>Data preferita:</strong> ${bookingData.date}</p>` : ''}
            ${bookingData.price ? `<p><strong>Prezzo indicativo:</strong> €${bookingData.price}</p>` : ''}
          </div>
          
          <p style="color: #666;">
            ${bookingData.professionalName} riceverà la tua richiesta e ti contatterà al più presto.
          </p>
          
          <a href="https://doghero.it/cerca" style="display: inline-block; background: #ee7712; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Cerca Altri Professionisti
          </a>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>Questa email è stata inviata da PetLife</p>
          <p>© ${new Date().getFullYear()} PetLife - Tutti i diritti riservati</p>
        </div>
      </div>
    `,
  })
}

// Template: Benvenuto nuovo utente
export async function sendWelcomeEmail(
  email: string,
  name: string,
  role: 'dog_owner' | 'professional'
): Promise<SendGridResponse> {
  const isProfessional = role === 'professional'
  
  return sendEmail({
    to: email,
    subject: `🎉 Benvenuto su PetLife, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ee7712, #df5d08); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🐕 PetLife</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333;">Benvenuto ${name}! 🎉</h2>
          <p style="color: #666;">
            ${isProfessional 
              ? 'Grazie per esserti registrato come professionista su PetLife!'
              : 'Grazie per esserti registrato su PetLife!'
            }
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="color: #ee7712; margin-top: 0;">Cosa puoi fare ora?</h3>
            ${isProfessional ? `
              <ul style="color: #666;">
                <li>Completa il tuo profilo con foto e descrizione</li>
                <li>Aggiungi i tuoi servizi e prezzi</li>
                <li>Inizia a ricevere contatti dai clienti</li>
                <li>Scegli un piano per aumentare la visibilità</li>
              </ul>
            ` : `
              <ul style="color: #666;">
                <li>Cerca professionisti nella tua zona</li>
                <li>Leggi le recensioni e confronta i servizi</li>
                <li>Contatta i professionisti che preferisci</li>
                <li>Salva i tuoi preferiti per trovarli facilmente</li>
              </ul>
            `}
          </div>
          
          <a href="${isProfessional ? 'https://doghero.it/dashboard' : 'https://doghero.it/cerca'}" 
             style="display: inline-block; background: #ee7712; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            ${isProfessional ? 'Vai alla Dashboard' : 'Inizia a Cercare'}
          </a>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p>Questa email è stata inviata da PetLife</p>
          <p>© ${new Date().getFullYear()} PetLife - Tutti i diritti riservati</p>
        </div>
      </div>
    `,
  })
}

// Configurazione SendGrid (mock)
export const sendgridConfig = {
  apiKey: process.env.SENDGRID_API_KEY || 'SG.mock_api_key',
  fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@doghero.it',
  fromName: 'PetLife',
}
