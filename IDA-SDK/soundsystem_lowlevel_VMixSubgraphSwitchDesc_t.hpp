#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixSubgraphSwitchDesc_t {
    CUtlString m_name;
    CUtlString m_effectName;
    char m_subgraphs[0x18];
    soundsystem_lowlevel_VMixSubgraphSwitchInterpolationType_t m_interpolationMode;
    bool m_bOnlyTailsOnFadeOut;
    char pad_666[0x3];
    float32 m_flInterpolationTime;
    char end_pad_667[0x4];
};
