#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropFilter_SurfaceProperties {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    char m_AllowedSurfaceProperties[0x18];
    char m_DisallowedSurfaceProperties[0x18];
};
