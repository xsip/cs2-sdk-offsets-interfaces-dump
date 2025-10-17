#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "tier2_CRangeFloat.hpp"
#include "tier2_CRangeFloat.hpp"
#include "tier2_CRangeFloat.hpp"
#include "tier2_CRangeFloat.hpp"
#include "tier2_CRangeFloat.hpp"

class animationsystem_MoodAnimationLayer_t {
    CUtlString m_sName;
    bool m_bActiveListening;
    bool m_bActiveTalking;
    char pad_454[0x6];
    char m_layerAnimations[0x18];
    tier2_CRangeFloat m_flIntensity;
    tier2_CRangeFloat m_flDurationScale;
    bool m_bScaleWithInts;
    char pad_455[0x3];
    tier2_CRangeFloat m_flNextStart;
    tier2_CRangeFloat m_flStartOffset;
    tier2_CRangeFloat m_flEndOffset;
    float32 m_flFadeIn;
    float32 m_flFadeOut;
    char end_pad_456[0x4];
};
