// generated - do not edit!

import {server_CModelPointEntity} from './CModelPointEntity';
// Class size: 0x9E0
// BaseClass: : public CS2::server::CModelPointEntity
export const server_CPointWorldText  = {
	...server_CModelPointEntity,
	m_messageText: 1840n, // char m_messageText[512]; |  0x730 | Schema_FixedArray | Size: 0x200
	m_FontName: 2352n, // char m_FontName[64]; |  0x930 | Schema_FixedArray | Size: 0x40
	m_BackgroundMaterialName: 2416n, // char m_BackgroundMaterialName[64]; |  0x970 | Schema_FixedArray | Size: 0x40
	m_bEnabled: 2480n, // bool m_bEnabled; |  0x9b0 | Schema_Builtin | Size: 0x1
	m_bFullbright: 2481n, // bool m_bFullbright; |  0x9b1 | Schema_Builtin | Size: 0x1
	m_flWorldUnitsPerPx: 2484n, // float32 m_flWorldUnitsPerPx; |  0x9b4 | Schema_Builtin | Size: 0x4
	m_flFontSize: 2488n, // float32 m_flFontSize; |  0x9b8 | Schema_Builtin | Size: 0x4
	m_flDepthOffset: 2492n, // float32 m_flDepthOffset; |  0x9bc | Schema_Builtin | Size: 0x4
	m_bDrawBackground: 2496n, // bool m_bDrawBackground; |  0x9c0 | Schema_Builtin | Size: 0x1
	m_flBackgroundBorderWidth: 2500n, // float32 m_flBackgroundBorderWidth; |  0x9c4 | Schema_Builtin | Size: 0x4
	m_flBackgroundBorderHeight: 2504n, // float32 m_flBackgroundBorderHeight; |  0x9c8 | Schema_Builtin | Size: 0x4
	m_flBackgroundWorldToUV: 2508n, // float32 m_flBackgroundWorldToUV; |  0x9cc | Schema_Builtin | Size: 0x4
	m_Color: 2512n, // GlobalTypes::Color  | Schema_Atomic | Size: 0x4
	m_nJustifyHorizontal: 2516n, // client::PointWorldTextJustifyHorizontal_t  | Schema_DeclaredEnum | Size: 0x4
	m_nJustifyVertical: 2520n, // client::PointWorldTextJustifyVertical_t  | Schema_DeclaredEnum | Size: 0x4
	m_nReorientMode: 2524n, // client::PointWorldTextReorientMode_t  | Schema_DeclaredEnum | Size: 0x4
}
