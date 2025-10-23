#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"

class animlib_Event_t {
    CGlobalSymbol m_ID;
    animlib_NmPercent_t m_startTime;
    animlib_NmPercent_t m_duration;
};
