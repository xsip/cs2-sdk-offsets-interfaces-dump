#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmFootEvent {
    char vTable1723[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1724[0x7];
    animlib_NmFootPhase_t m_phase;
    char end_pad_1744[0x7];
};
