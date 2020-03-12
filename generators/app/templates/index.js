import { Hippy } from '@tencent/hippy-react';
import <%=packageName%> from './src/<%=packageNameLowerCase%>';

const hippy = new Hippy({
  appName: '<%=packageName%>',
  entryPage: <%=packageName%>,
});

hippy.regist();
