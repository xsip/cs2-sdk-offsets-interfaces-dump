#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_RandomRotation {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeAngles m_vRandomRotationMin;
    CSmartPropAttributeAngles m_vRandomRotationMax;
    CSmartPropAttributeAngles m_vSnapIncrement;
};
