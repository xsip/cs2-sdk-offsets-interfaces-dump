#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_CDSPMixgroupModifier {
    CUtlString m_mixgroup;
    float32 m_flModifier;
    float32 m_flModifierMin;
    float32 m_flSourceModifier;
    float32 m_flSourceModifierMin;
    float32 m_flListenerReverbModifierWhenSourceReverbIsActive;
    char end_pad_543[0x4];
};
