#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_ComputeDistance3D {
    void **__vftable_0;
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2635[0x8];
    CUtlString m_OutputVariableName;
    smartprops_CSmartPropAttributeCoordinateSpace m_OutputCoordinateSpace;
    CSmartPropAttributeVector m_InputPositionA;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceA;
    CSmartPropAttributeVector m_InputPositionB;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceB;
};
