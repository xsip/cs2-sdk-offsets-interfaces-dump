#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixUtilityDesc_t {
    soundsystem_lowlevel_VMixChannelOperation_t m_nOp;
    float32 m_flInputPan;
    float32 m_flOutputBalance;
    float32 m_fldbOutputGain;
    bool m_bBassMono;
    char pad_2467[0x3];
    float32 m_flBassFreq;
};
