#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_SetOrientation {
    void **__vftable_0;
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2654[0x8];
    CSmartPropAttributeVector m_vForwardVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_ForwardDirectionSpace;
    CSmartPropAttributeVector m_vUpVector;
    smartprops_CSmartPropAttributeCoordinateSpace m_UpDirectionSpace;
    CSmartPropAttributeBool m_bPrioritizeUp;
};
