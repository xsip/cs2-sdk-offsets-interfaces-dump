#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"

class animlib_EventMarker_t {
    animlib_NmPercent_t m_startTime;
    char pad_1772[0x4];
    CGlobalSymbol m_ID;
};
