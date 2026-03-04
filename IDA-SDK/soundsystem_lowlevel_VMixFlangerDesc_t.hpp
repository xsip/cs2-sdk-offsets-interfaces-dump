#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixFlangerDesc_t {
    bool m_bPhaseInvert;
    char pad_662[0x3];
    float32 m_flGlideTime;
    float32 m_flDelay;
    float32 m_flOutputGain;
    float32 m_flFeedbackGain;
    float32 m_flFeedforwardGain;
    float32 m_flModRate;
    float32 m_flModDepth;
    bool m_bApplyAntialiasing;
    char end_pad_663[0x3];
};
