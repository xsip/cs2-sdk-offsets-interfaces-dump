#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class soundsystem_lowlevel_VMixSubgraphSwitchDesc_t {
    soundsystem_lowlevel_VMixSubgraphSwitchInterpolationType_t m_interpolationMode;
    bool m_bOnlyTailsOnFadeOut;
    char pad_2467[0x3];
    float32 m_flInterpolationTime;
};
