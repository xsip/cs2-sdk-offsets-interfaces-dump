#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixPlateverbDesc_t {
    float32 m_flPrefilter;
    float32 m_flInputDiffusion1;
    float32 m_flInputDiffusion2;
    float32 m_flDecay;
    float32 m_flDamp;
    float32 m_flFeedbackDiffusion1;
    float32 m_flFeedbackDiffusion2;
};
