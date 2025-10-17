#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"
#include "smartprops_CSmartPropAttributeCoordinateSpace.hpp"

class smartprops_CSmartPropOperation_RotateTowards {
    char vTable2559[0x8];
    CSmartPropAttributeBool m_bEnabled;
    char end_pad_2560[0x8];
    CSmartPropAttributeVector m_vOriginPos;
    CSmartPropAttributeVector m_vTargetPos;
    CSmartPropAttributeVector m_vUpPos;
    CSmartPropAttributeFloat m_flWeight;
    smartprops_CSmartPropAttributeCoordinateSpace m_OriginSpace;
    smartprops_CSmartPropAttributeCoordinateSpace m_TargetSpace;
    smartprops_CSmartPropAttributeCoordinateSpace m_UpSpace;
};
