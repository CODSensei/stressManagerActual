import axios from 'axios';

const smtp = async (Email, Name,total,level) => {
  await axios.post('https://smtpserver-eosin.vercel.app/mail', {
    "to": Email,
    "Name": Name,
    "body": `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Scorecard</title>
      </head>
      <body class="bg-gray-100 text-gray-800" style="margin: 0; padding: 0; background-color: #f7fafc; color: #2d3748; font-family: Arial, sans-serif;">
          <div class="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg" style="max-width: 32rem; margin: 2rem auto; padding: 1rem; background-color: #ffffff; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); border-radius: 0.5rem;">
              <div class="text-center mb-6" style="text-align: center; margin-bottom: 1.5rem;">
                  <h1 class="text-2xl font-bold text-gray-900" style="font-size: 1.5rem; font-weight: 700; color: #1a202c;">Your Survey Report</h1>
                  <p class="text-gray-600" style="color: #718096;">Check out your latest scores!</p>
              </div>
              
              <div class="mb-6" style="margin-bottom: 1.5rem;">
                  <p class="text-lg text-gray-700" style="font-size: 1.125rem; color: #4a5568;">Hello ${Name},</p>
                  <p class="mt-2 text-gray-600" style="margin-top: 0.5rem; color: #718096;">We are pleased to share your latest scorecard from Stress Manager Survey with you. Below are your scores for the recent assessment:</p>
              </div>
              
              <div class="border-t border-b py-4 mb-6" style="border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding-top: 1rem; padding-bottom: 1rem; margin-bottom: 1.5rem;">
                  <table class="w-full text-left" style="width: 100%; text-align: left;">
                      
                      <tbody>
                          <tr>
                              <td class="py-2" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">Stress Level</td>
                              <td class="py-2" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">${level}</td>
                          </tr>
                          <tr class="bg-gray-50" style="background-color: #f7fafc;">
                              <td class="py-2" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">Your Score</td>
                              <td class="py-2" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">${total}</td>
                          </tr>
                        
                          <!-- Add more subjects and scores as needed -->
                      </tbody>
                  </table>
              </div>
      
       
      
              <div class="mt-6 text-gray-600 text-sm" style="margin-top: 1.5rem; color: #718096; font-size: 0.875rem;">
                  <p>Best regards,</p>
                  <p>Stress Manager</p>
              </div>
          </div>
      
          <div class="text-center mt-8 text-gray-500 text-xs" style="text-align: center; margin-top: 2rem; color: #a0aec0; font-size: 0.75rem;">
              <p>&copy; 2024 Stress Manager. All rights reserved.</p>
          </div>
      </body>
      </html>
      `,
  });
};
export default smtp;
