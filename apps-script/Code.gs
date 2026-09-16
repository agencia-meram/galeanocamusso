/**
 * Doble Partida - Google Apps Script
 * 1. Ir a script.google.com -> Nuevo proyecto -> Pegar este código
 * 2. Servicio -> Gmail API ya viene habilitado via GmailApp
 * 3. Implementar -> Nueva implementación -> Tipo: Aplicación web
 *    Ejecutar como: Yo (marcosvav03@gmail.com)
 *    Quién tiene acceso: Cualquier persona
 * 4. Copiar URL /exec y pegarla en src/config.ts -> FORM.endpoint
 */

const DESTINO = "marcosvav03@gmail.com";

function capitalizar(str) {
  return String(str || "Sin nombre")
    .trim()
    .split(/\s+/)
    .map(function(w){ return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(); })
    .join(" ");
}

function normalizarTelefono(tel) {
  var n = String(tel || "").replace(/\D/g, "");
  if (!n) return "";
  if (n.charAt(0) === "0") n = n.substring(1);
  if (n.indexOf("54") === 0) {
    if (!/^549\d/.test(n)) n = "54" + "9" + n.substring(2);
  } else if (n.length === 10) {
    n = "549" + n;
  } else if (n.length === 11 && n.charAt(0) === "9") {
    n = "54" + n;
  } else if (n.length < 10) {
    n = "549" + n;
  }
  return n;
}

function telefonoCell(tel) {
  if (!tel || !String(tel).trim()) return "—";
  var n = normalizarTelefono(tel);
  var display = String(tel).trim().replace(/</g,"&lt;");
  var wa = "https://wa.me/" + n;
  return "<a href='" + wa + "' style='color:#17784a;font-weight:700;text-decoration:none'>" + display + " ↗</a>"
       + "<div style='font-size:11px;color:#5b574e;margin-top:4px'>" + n + " · <a href='" + wa + "' style='color:#17784a'>Abrir WhatsApp</a></div>";
}

function doPost(e) {
  try {
    var data = e.parameter || {};
    // Compatibilidad si viene como JSON o FormData
    if (e.postData && e.postData.contents) {
      try {
        var json = JSON.parse(e.postData.contents);
        data = json;
      } catch(err) {}
    }

    var nombreRaw = data["Nombre"] || data["nombre"] || "Sin nombre";
    var nombre = capitalizar(nombreRaw);
    var email = data["Email"] || data["email"] || "";
    var telefono = data["Teléfono"] || data["Telefono"] || data["telefono"] || "";
    var servicio = data["Servicio"] || data["servicio"] || "";
    var mensaje = data["Mensaje"] || data["mensaje"] || data["message"] || "";

    var subject = "Nuevo mensaje de " + nombre + " desde el sitio web";

    var htmlBody = ""
      + "<div style='font-family:Segoe UI,Arial,sans-serif;background:#f5efe1;padding:24px;color:#201e1a'>"
      + "<div style='max-width:600px;margin:0 auto;background:#fbf6ea;border:1px solid #e8ddd0;border-radius:16px;overflow:hidden'>"
      + "<div style='background:#1a1813;color:#f5efe1;padding:20px 24px'>"
      + "<div style='font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#f0a183;margin-bottom:6px'>FOLIO 06 · CONTACTO</div>"
      + "<div style='font-family:Georgia,serif;font-size:22px;line-height:1.2'>Nuevo mensaje de <em style=\"color:#f0a183\">" + nombre + "</em></div>"
      + "</div>"
      + "<table style='width:100%;border-collapse:collapse;font-size:14px'>"
      + "<tr><td style='padding:14px 20px;border-bottom:1px solid #ece2cc;width:160px;color:#5b574e;font-weight:700'>Nombre</td><td style='padding:14px 20px;border-bottom:1px solid #ece2cc'>" + nombre + "</td></tr>"
      + "<tr><td style='padding:14px 20px;border-bottom:1px solid #ece2cc;color:#5b574e;font-weight:700'>Email</td><td style='padding:14px 20px;border-bottom:1px solid #ece2cc'><a href='mailto:" + email + "' style='color:#8f2c1c'>" + email + "</a></td></tr>"
      + "<tr><td style='padding:14px 20px;border-bottom:1px solid #ece2cc;color:#5b574e;font-weight:700'>Teléfono</td><td style='padding:14px 20px;border-bottom:1px solid #ece2cc'>" + telefonoCell(telefono) + "</td></tr>"
      + "<tr><td style='padding:14px 20px;border-bottom:1px solid #ece2cc;color:#5b574e;font-weight:700'>Servicio</td><td style='padding:14px 20px;border-bottom:1px solid #ece2cc'>" + (servicio || "—") + "</td></tr>"
      + "<tr><td style='padding:14px 20px;color:#5b574e;font-weight:700;vertical-align:top'>Mensaje</td><td style='padding:14px 20px;white-space:pre-wrap'>" + mensaje.replace(/</g,"&lt;") + "</td></tr>"
      + "</table>"
      + "<div style='padding:14px 20px;background:#f5efe1;font-size:12px;color:#5b574e'>Enviado desde dobleepartida.com.ar · Responder directamente a " + email + "</div>"
      + "</div>"
      + "</div>";

    var plain = "Nombre: " + nombre + "\nEmail: " + email + "\nTel: " + telefono + "\nServicio: " + servicio + "\n\nMensaje:\n" + mensaje;

    GmailApp.sendEmail(DESTINO, subject, plain, {
      htmlBody: htmlBody,
      replyTo: email,
      name: "Doble Partida Web"
    });

    return ContentService.createTextOutput(JSON.stringify({ success: "true" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: "false", error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ status: "ok", destino: DESTINO }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
