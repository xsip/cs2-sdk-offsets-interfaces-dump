#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_ResetRotation {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CSmartPropAttributeBool m_bIgnoreObjectRotation;
    CSmartPropAttributeBool m_bResetPitch;
    CSmartPropAttributeBool m_bResetYaw;
    CSmartPropAttributeBool m_bResetRoll;
};
