

export  default function date() {

    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
  return ( today.toLocaleDateString("en-us", options)

  )
}

export function day() {
    const today = new Date();
    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-us", options);
}