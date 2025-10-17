#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmTargetWarpEvent {
    char vTable1724[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1725[0x7];
    animlib_NmTargetWarpRule_t m_rule;
    animlib_NmTargetWarpAlgorithm_t m_algorithm;
    char end_pad_1775[0x6];
};
