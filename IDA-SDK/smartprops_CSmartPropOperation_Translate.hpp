#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_Translate {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CSmartPropAttributeVector m_vPosition;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpace;
};
