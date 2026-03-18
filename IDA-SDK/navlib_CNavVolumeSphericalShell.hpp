#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class navlib_CNavVolumeSphericalShell {
    char pad_2848[0x78];
    Vector m_vCenter;
    float32 m_flRadius;
    float32 m_flRadiusInner;
    char end_pad_4290[0x4];
};
