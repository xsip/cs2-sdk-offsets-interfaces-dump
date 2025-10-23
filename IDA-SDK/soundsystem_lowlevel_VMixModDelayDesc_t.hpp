#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "soundsystem_lowlevel_VMixFilterDesc_t.hpp"

class soundsystem_lowlevel_VMixModDelayDesc_t {
    soundsystem_lowlevel_VMixFilterDesc_t m_feedbackFilter;
    bool m_bPhaseInvert;
    char pad_2464[0x3];
    float32 m_flGlideTime;
    float32 m_flDelay;
    float32 m_flOutputGain;
    float32 m_flFeedbackGain;
    float32 m_flModRate;
    float32 m_flModDepth;
    bool m_bApplyAntialiasing;
    char end_pad_2465[0x3];
};
