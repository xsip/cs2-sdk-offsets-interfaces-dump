#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropFilter_SurfaceAngle {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeFloat m_flSurfaceSlopeMin;
    CSmartPropAttributeFloat m_flSurfaceSlopeMax;
};
