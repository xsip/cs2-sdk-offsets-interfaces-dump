#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_SetOrientation {
    char vTable2558[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2559[0x8];
    CSmartPropAttributeVector m_vForwardVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_ForwardDirectionSpace;
    CSmartPropAttributeVector m_vUpVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_UpDirectionSpace;
    CSmartPropAttributeBool m_bPrioritizeUp;
};
