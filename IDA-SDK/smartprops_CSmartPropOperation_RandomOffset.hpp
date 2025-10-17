#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class smartprops_CSmartPropOperation_RandomOffset {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeVector m_vRandomPositionMin;
    CSmartPropAttributeVector m_vRandomPositionMax;
    CSmartPropAttributeVector m_vSnapIncrement;
};
