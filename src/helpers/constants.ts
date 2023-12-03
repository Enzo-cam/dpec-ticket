export function formatISODate(isoDateString: string) {
    const dateObject = new Date(isoDateString);
  
    return dateObject.toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      // second: '2-digit',
      // timeZoneName: 'short'
    });
  }