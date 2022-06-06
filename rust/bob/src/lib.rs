pub fn reply(message: &str) -> &str {
    let message: String = String::from(message.trim());

    let empty = message.is_empty();
    let question = message.ends_with('?');

    let exclamation = message == message.to_uppercase()
        && message
            .chars()
            .filter(|c| c.is_alphabetic())
            .collect::<String>()
            .len()
            > 0;

    let mut utterance_type = UtteranceType::AnythingElse;
    if question && exclamation {
        utterance_type = UtteranceType::ExclamatoryQuestion
    } else if question {
        utterance_type = UtteranceType::Question
    } else if exclamation {
        utterance_type = UtteranceType::Exclamation
    } else if empty {
        utterance_type = UtteranceType::EmptyString
    }

    match utterance_type {
        UtteranceType::Question => "Sure.",
        UtteranceType::Exclamation => "Whoa, chill out!",
        UtteranceType::ExclamatoryQuestion => "Calm down, I know what I'm doing!",
        UtteranceType::EmptyString => "Fine. Be that way!",
        UtteranceType::AnythingElse => "Whatever.",
    }
}

enum UtteranceType {
    Question,
    Exclamation,
    ExclamatoryQuestion,
    EmptyString,
    AnythingElse,
}