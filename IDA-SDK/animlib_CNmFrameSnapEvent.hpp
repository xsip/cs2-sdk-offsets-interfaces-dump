#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animlib_CNmFrameSnapEvent {
    char vTable1723[0x8];
    float32 m_flStartTimeSeconds;
    float32 m_flDurationSeconds;
    CGlobalSymbol m_syncID;
    bool m_bClientOnly;
    char end_pad_1724[0x7];
    animlib_NmFrameSnapEventMode_t m_frameSnapMode;
    char end_pad_1745[0x4];
};
