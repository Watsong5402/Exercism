pub struct Clock {
    hours: i32,
    minutes: i32
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let clock = Clock{hours: hours, minutes: minutes};
        return clock;
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        unimplemented!("Add {} minutes to existing Clock time", minutes);
    }
}


use std::fmt;

impl fmt::Display for Clock {
    fn fmt(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
        let str = String::from(&self.hours.to_string()) + ":" + &self.minutes.to_string();
        Ok(())
    }
}