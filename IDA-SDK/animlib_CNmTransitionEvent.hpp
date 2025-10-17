#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmTransitionEvent {
    char vTable1724[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1725[0x7];
    animlib_NmTransitionRule_t m_rule;
    char pad_1776[0x7];
    CGlobalSymbol m_ID;
};
