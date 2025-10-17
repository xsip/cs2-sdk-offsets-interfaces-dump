#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_ComputeDistance3D {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CUtlString m_OutputVariableName;
    smartprops_CSmartPropAttributeCoordinateSpace m_OutputCoordinateSpace;
    CSmartPropAttributeVector m_InputPositionA;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceA;
    CSmartPropAttributeVector m_InputPositionB;
    smartprops_CSmartPropAttributeCoordinateSpace m_CoordinateSpaceB;
};
