#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmTransitionEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2497[0x7];
    animlib_NmTransitionRule_t m_rule;
    char pad_2551[0x7];
    CGlobalSymbol m_ID;
};
