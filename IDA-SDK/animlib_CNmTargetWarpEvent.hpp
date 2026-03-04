#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_NmPercent_t.hpp"
#include "animlib_NmPercent_t.hpp"

class animlib_CNmTargetWarpEvent {
    void **__vftable_0;
    animlib_NmPercent_t m_flStartTime;
    animlib_NmPercent_t m_flDuration;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_2498[0x7];
    animlib_NmTargetWarpRule_t m_rule;
    animlib_NmTargetWarpAlgorithm_t m_algorithm;
    char end_pad_2551[0x6];
};
